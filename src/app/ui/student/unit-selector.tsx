'use client';

import { useTransition } from 'react';
import { updatePreferredUnit_Action } from '@/lib/actions';

export default function UnitSelector({ initialUnit }: { initialUnit: string }) {
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newUnit = e.target.value;
        startTransition(async () => {
            await updatePreferredUnit_Action(newUnit);
        });
    };

    return (
        <div className="flex items-center gap-2">
            <label htmlFor="unit" className="text-sm font-medium text-gray-400">
                Preferred Unit:
            </label>
            <select
                id="unit"
                defaultValue={initialUnit}
                onChange={handleChange}
                disabled={isPending}
                className="bg-zinc-800 border-0 text-white rounded-md text-sm py-1 pl-3 pr-8 focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
            >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
            </select>
            {isPending && <span className="text-xs text-indigo-400 animate-pulse">Saving...</span>}
        </div>
    );
}
