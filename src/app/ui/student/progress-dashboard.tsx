'use client';

import { useState, useMemo } from 'react';
import { 
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Legend 
} from 'recharts';

export default function ProgressDashboard({ logs, bodyMeasurements }: { logs: any[], bodyMeasurements: any[] }) {
    const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
    const [selectedExercise, setSelectedExercise] = useState<string>('');

    // Compute unique exercises list
    const exercises = useMemo(() => {
        const unique = new Set(logs.map(log => log.exerciseName));
        const arr = Array.from(unique);
        if (arr.length > 0 && selectedExercise === '') {
            setSelectedExercise(arr[0] as string);
        }
        return arr as string[];
    }, [logs, selectedExercise]);

    // Format data based on timeframe
    const formatData = (data: any[], dateField: string, valField: string, aggrgation: 'max' | 'avg') => {
        const grouped: Record<string, number[]> = {};
        
        data.forEach(item => {
            const d = new Date(item[dateField]);
            let key = '';
            if (timeframe === 'daily') {
                key = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
            } else if (timeframe === 'weekly') {
                const startOfWeek = new Date(d.setDate(d.getDate() - d.getDay()));
                key = startOfWeek.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
            } else {
                key = d.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
            }
            if (!grouped[key]) grouped[key] = [];
            grouped[key].push(item[valField]);
        });

        return Object.keys(grouped).map(key => {
            const vals = grouped[key];
            const val = aggrgation === 'max' 
                ? Math.max(...vals)
                : vals.reduce((a, b) => a + b, 0) / vals.length;
            return { date: key, val: parseFloat(val.toFixed(2)) };
        });
    };

    // Prepare Exercise Chart Data
    const exerciseData = useMemo(() => {
        const filteredLogs = logs.filter(l => l.exerciseName === selectedExercise);
        return formatData(filteredLogs, 'date', 'weight', 'max');
    }, [logs, selectedExercise, timeframe]);

    // Prepare Body Measurement Chart Data
    const bodyWeightData = useMemo(() => {
        return formatData(bodyMeasurements, 'date', 'weight', 'avg');
    }, [bodyMeasurements, timeframe]);

    const bmiData = useMemo(() => {
        // filter out null bmis
        const validBmis = bodyMeasurements.filter(b => b.bmi);
        return formatData(validBmis, 'date', 'bmi', 'avg');
    }, [bodyMeasurements, timeframe]);

    // Compute Best Records
    const bestRecords = useMemo(() => {
        const bests: Record<string, { weight: number, reps: number, unit: string }> = {};
        logs.forEach(log => {
            if (!bests[log.exerciseName]) {
                bests[log.exerciseName] = { weight: 0, reps: 0, unit: log.weightUnit || 'kg' };
            }
            if (log.weight > bests[log.exerciseName].weight) {
                bests[log.exerciseName].weight = log.weight;
                bests[log.exerciseName].reps = log.reps;
                bests[log.exerciseName].unit = log.weightUnit || 'kg';
            } else if (log.weight === bests[log.exerciseName].weight && log.reps > bests[log.exerciseName].reps) {
                bests[log.exerciseName].reps = log.reps;
            }
        });
        return bests;
    }, [logs]);

    const btnStyle = (active: boolean) => 
        `px-3 py-1 text-xs font-semibold rounded-md transition-colors ${active ? 'bg-indigo-600 text-white' : 'bg-zinc-800 text-gray-400 hover:text-white'}`;

    return (
        <div className="space-y-6">
            
            {/* Global Timeframe Toggle */}
            <div className="flex bg-zinc-900 border border-zinc-800 p-1.5 rounded-lg justify-between items-center w-full max-w-[250px] mx-auto mb-6 shadow-sm">
                <button onClick={() => setTimeframe('daily')} className={btnStyle(timeframe === 'daily')}>Daily</button>
                <button onClick={() => setTimeframe('weekly')} className={btnStyle(timeframe === 'weekly')}>Weekly</button>
                <button onClick={() => setTimeframe('monthly')} className={btnStyle(timeframe === 'monthly')}>Monthly</button>
            </div>

            {/* Exercise Progress Chart */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                 <div className="flex justify-between items-center mb-4">
                     <h3 className="text-sm font-bold text-white uppercase tracking-wide">Exercise Progress</h3>
                     <select 
                        value={selectedExercise}
                        onChange={(e) => setSelectedExercise(e.target.value)}
                        className="bg-zinc-800 border-zinc-700 text-xs text-white rounded px-2 py-1 outline-none"
                     >
                         {exercises.map(ex => <option key={ex} value={ex}>{ex}</option>)}
                     </select>
                 </div>
                 
                 {exerciseData.length > 0 ? (
                     <div className="h-48 w-full mt-4">
                         <ResponsiveContainer width="100%" height="100%">
                             <LineChart data={exerciseData}>
                                 <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
                                 <XAxis dataKey="date" stroke="#a1a1aa" fontSize={10} tickMargin={10} />
                                 <YAxis stroke="#a1a1aa" fontSize={10} width={30} tickMargin={5} />
                                 <RechartsTooltip 
                                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
                                    itemStyle={{ color: '#818cf8', fontWeight: 'bold' }}
                                 />
                                 <Line type="monotone" dataKey="val" name="Max Weight" stroke="#818cf8" strokeWidth={3} dot={{ fill: '#818cf8', r: 4 }} activeDot={{ r: 6 }} />
                             </LineChart>
                         </ResponsiveContainer>
                     </div>
                 ) : (
                     <div className="h-48 flex items-center justify-center text-zinc-500 text-sm">No data available</div>
                 )}
            </div>

            {/* Personal Records */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                 <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4 text-center">Personal Records</h3>
                 <div className="space-y-2">
                     {Object.entries(bestRecords).slice(0, 5).map(([ex, rec]) => (
                         <div key={ex} className="flex justify-between items-center bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                             <span className="text-sm text-gray-300">{ex}</span>
                             <div className="text-right">
                                 <p className="text-indigo-400 font-bold leading-none">{formWeight(rec.weight)} {rec.unit}</p>
                                 <p className="text-[10px] text-gray-500">x {rec.reps} reps</p>
                             </div>
                         </div>
                     ))}
                     {Object.keys(bestRecords).length === 0 && <p className="text-xs text-gray-500 text-center">No records set yet.</p>}
                 </div>
            </div>

            {/* Body Weight Progress */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                 <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">Body Weight & BMI</h3>
                 {bodyWeightData.length > 0 ? (
                     <div className="h-48 w-full mt-4">
                         <ResponsiveContainer width="100%" height="100%">
                             <BarChart data={bodyWeightData}>
                                 <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
                                 <XAxis dataKey="date" stroke="#a1a1aa" fontSize={10} tickMargin={10} />
                                 <YAxis stroke="#a1a1aa" fontSize={10} width={30} tickMargin={5} domain={['dataMin - 5', 'dataMax + 5']} />
                                 <RechartsTooltip 
                                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
                                    itemStyle={{ color: '#34d399', fontWeight: 'bold' }}
                                 />
                                 <Bar dataKey="val" name="Avg Weight" fill="#34d399" radius={[4, 4, 0, 0]} />
                             </BarChart>
                         </ResponsiveContainer>
                     </div>
                 ) : (
                      <div className="h-48 flex items-center justify-center text-zinc-500 text-sm">No data available</div>
                 )}

                 {bmiData.length > 0 && (
                     <div className="mt-8">
                         <h4 className="text-xs font-bold text-white uppercase tracking-wide mb-4 text-center">BMI Tracking</h4>
                         <div className="h-32 w-full mt-2">
                             <ResponsiveContainer width="100%" height="100%">
                                 <LineChart data={bmiData}>
                                     <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
                                     <XAxis dataKey="date" stroke="#a1a1aa" fontSize={10} tickMargin={10} />
                                     <YAxis stroke="#a1a1aa" fontSize={10} width={30} tickMargin={5} domain={['dataMin - 1', 'dataMax + 1']} />
                                     <RechartsTooltip 
                                        contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }}
                                        itemStyle={{ color: '#fbbf24', fontWeight: 'bold' }}
                                     />
                                     <Line type="step" dataKey="val" name="BMI" stroke="#fbbf24" strokeWidth={2} dot={{ fill: '#fbbf24', r: 3 }} />
                                 </LineChart>
                             </ResponsiveContainer>
                         </div>
                     </div>
                 )}
            </div>
            
        </div>
    )
}

function formWeight(w: number) {
    return w > 0 ? w : 'B.W.';
}
