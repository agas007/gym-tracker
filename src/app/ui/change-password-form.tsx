'use client';

import { useState } from 'react';
import { changePassword_Action } from '@/lib/actions-auth';

export default function ChangePasswordForm({ isMandatory = false }: { isMandatory?: boolean }) {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData();
        formData.append('currentPassword', currentPassword);
        formData.append('newPassword', newPassword);
        formData.append('confirmPassword', confirmPassword);

        const result = await changePassword_Action(null, formData);
        
        if (result.success) {
            setStatus('Password changed successfully! Redirecting...');
            if (isMandatory) {
                // Perform hard reload to homepage to evaluate layout logic
                window.location.href = '/';
            } else {
                setCurrentPassword('');
                setNewPassword('');
                setConfirmPassword('');
                setTimeout(() => setStatus(null), 3000);
            }
        } else {
            setStatus(result.message);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">{isMandatory ? 'Set a New Password' : 'Change Password'}</h3>
            {isMandatory && (
                <p className="text-sm text-yellow-500 mb-6 bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
                    For your security, you must change your default password before accessing the system.
                </p>
            )}
            
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Current Password</label>
                    <input 
                        type="password" 
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="••••••••"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">New Password</label>
                    <input 
                        type="password" 
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="••••••••"
                        required
                        minLength={6}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Confirm New Password</label>
                    <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="••••••••"
                        required
                        minLength={6}
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={loading || !currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-md transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Updating...' : 'Update Password'}
                </button>

                {status && (
                    <p className={`text-sm mt-3 text-center ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                        {status}
                    </p>
                )}
            </div>
        </form>
    );
}
