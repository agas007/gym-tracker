'use client';

import { useState, useEffect } from 'react';

export default function PwaInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isInstallable, setIsInstallable] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Register Service Worker
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(
                    (registration) => console.log('SW registered:', registration),
                    (err) => console.log('SW registration failed:', err)
                );
            });
        }

        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            if (!localStorage.getItem('pwaDismissed')) {
                setIsInstallable(true);
            }
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // check if running as PWA already
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsInstallable(false);
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setIsInstallable(false);
            setDeferredPrompt(null);
        }
    };

    const handleDismiss = () => {
        setIsInstallable(false);
        setIsDismissed(true);
        localStorage.setItem('pwaDismissed', 'true');
    };

    if (!isInstallable || isDismissed) return null;

    return (
        <div className="fixed bottom-20 left-4 right-4 md:bottom-6 md:left-auto md:right-6 md:w-80 bg-zinc-800 border border-zinc-700 p-4 rounded-xl shadow-2xl z-50 flex items-center justify-between animate-fade-in-up">
            <div className="mr-4">
                <h4 className="text-white font-bold text-sm mb-1">Install App</h4>
                <p className="text-xs text-zinc-400">Add Gym Tracker to your home screen for faster access.</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
                <button 
                  onClick={handleInstallClick}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-1.5 px-3 rounded"
                >
                    Install
                </button>
                <button 
                  onClick={handleDismiss}
                  className="text-zinc-400 hover:text-white text-[10px]"
                >
                    Dismiss
                </button>
            </div>
        </div>
    );
}
