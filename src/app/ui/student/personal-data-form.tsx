'use client';

import { useState } from 'react';
import { updatePersonalData_Action } from '@/lib/actions';

export default function PersonalDataForm({ profile }: { profile: any }) {
    const [age, setAge] = useState<number | ''>(profile.age || '');
    const [gender, setGender] = useState<string>(profile.gender || '');
    const [height, setHeight] = useState<number | ''>(profile.height || '');
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const result = await updatePersonalData_Action({
            age: age === '' ? null : Number(age),
            gender: gender === '' ? null : gender,
            height: height === '' ? null : Number(height),
        });

        if (result.success) {
            setStatus('Profile updated successfully!');
            setTimeout(() => setStatus(null), 3000);
        } else {
            setStatus(result.message || 'Error occurred');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Personal Details</h3>
            
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Age</label>
                    <input 
                        type="number" 
                        value={age}
                        onChange={(e) => setAge(e.target.value === '' ? '' : parseInt(e.target.value))}
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="e.g. 25"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Gender / Sex</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    >
                        <option value="">-- Select --</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Height (cm)</label>
                    <input 
                        type="number" 
                        value={height}
                        onChange={(e) => setHeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
                        className="w-full bg-zinc-950 border border-zinc-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="e.g. 175"
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-md transition mt-4 disabled:opacity-50"
                >
                    {loading ? 'Saving...' : 'Save Changes'}
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
