'use client';

import { useState } from 'react';
import { logBodyMeasurement_Action } from '@/lib/actions';

export default function DailyWeightLogger({ initialWeight = '' }: { initialWeight?: number | '' }) {
    const [weight, setWeight] = useState<number | ''>(initialWeight);
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(initialWeight !== '');

    const handleLog = async () => {
        if (weight === '') return;
        setLoading(true);
        const result = await logBodyMeasurement_Action({ weight: Number(weight) });
        if (result.success) {
            setLogged(true);
        }
        setLoading(false);
    }

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 mb-8 flex items-center justify-between">
            <div>
                <h3 className="text-white font-bold text-lg">Daily Weight Log</h3>
                <p className="text-sm text-gray-400">Track your body weight today</p>
                {logged && <p className="text-xs text-green-400 mt-1">✓ Logged for today</p>}
            </div>
            <div className="flex gap-2">
                <input 
                    type="number"
                    value={weight}
                    onChange={(e) => {
                        setWeight(e.target.value === '' ? '' : parseFloat(e.target.value));
                        setLogged(false);
                    }}
                    placeholder="kg"
                    className="w-20 bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-white outline-none focus:ring-1 focus:ring-indigo-500 text-center"
                />
                <button 
                    onClick={handleLog}
                    disabled={loading || logged || weight === ''}
                    className={`px-4 py-2 rounded-lg font-bold shadow transition-colors ${
                        logged ? 'bg-zinc-800 text-zinc-500' : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    }`}
                >
                    {loading ? '...' : logged ? 'Saved' : 'Save'}
                </button>
            </div>
        </div>
    );
}
