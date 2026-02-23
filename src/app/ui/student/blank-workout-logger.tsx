'use client';

import { useState, useEffect } from 'react';
import { logSet_Action, finishWorkout_Action, createSession_Action } from '@/lib/actions';

export default function BlankWorkoutLogger({ studentId, initialUnit = 'kg', allExercises }: { studentId: string, initialUnit?: string, allExercises: any[] }) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [globalElapsed, setGlobalElapsed] = useState<number>(0);
  const [currentUnit, setCurrentUnit] = useState(initialUnit);
  
  // Array of exercises added to this workout
  const [addedExercises, setAddedExercises] = useState<any[]>([]);

  useEffect(() => {
    if (started && startTime) {
      const interval = setInterval(() => {
        setGlobalElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [started, startTime]);

  const startWorkout = async () => {
      const id = await createSession_Action(studentId);
      if (id) {
          setSessionId(id);
          setStartTime(Date.now());
          setStarted(true);
      }
  };

  const addExercise = (exerciseId: string) => {
      const ex = allExercises.find(e => e.id === exerciseId);
      if (ex) {
          setAddedExercises([...addedExercises, { ...ex, customSets: [] }]);
      }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return h > 0 ? `${h}:${m}:${s}` : `${m}:${s}`;
  };

  return (
    <div>
      {!started ? (
        <div className="text-center py-10">
           <button 
            onClick={startWorkout}
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-transform transform hover:scale-105"
           >
               START FREESTYLE WORKOUT
           </button>
        </div>
      ) : (
          <div className="space-y-8">
              {/* Global Sticky Timer */}
              <div className="sticky top-0 z-10 flex flex-col items-center justify-center gap-2 bg-zinc-950/80 backdrop-blur-md py-4 border-b border-zinc-800 text-center mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
                  <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-full shadow-lg">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <span className="font-mono text-xl text-white font-semibold">
                          {formatTime(globalElapsed)}
                      </span>
                  </div>
                  
                  <div className="flex bg-zinc-800 rounded-lg p-1">
                      <button 
                          onClick={() => setCurrentUnit('kg')}
                          className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${currentUnit === 'kg' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
                      >
                          KG
                      </button>
                      <button 
                          onClick={() => setCurrentUnit('lbs')}
                          className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${currentUnit === 'lbs' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
                      >
                          LBS
                      </button>
                  </div>
              </div>

              {addedExercises.map((exercise: any, idx) => (
                  <BlankExerciseLogger 
                    key={`${exercise.id}-${idx}`} 
                    exercise={exercise} 
                    sessionId={sessionId!} 
                    currentUnit={currentUnit}
                  />
              ))}

              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex flex-col gap-2">
                  <h4 className="text-white text-sm font-medium">Add Exercise</h4>
                  <select 
                      className="bg-zinc-800 text-white text-sm rounded-lg border-zinc-700 w-full"
                      onChange={(e) => {
                          if (e.target.value) {
                             addExercise(e.target.value);
                             e.target.value = ''; // reset
                          }
                      }}
                  >
                      <option value="">-- Select an exercise --</option>
                      {allExercises.map(ex => (
                          <option key={ex.id} value={ex.id}>{ex.name}</option>
                      ))}
                  </select>
              </div>

              <div className="pt-8 pb-12">
                   <form action={async () => {
                       await finishWorkout_Action(sessionId!, globalElapsed);
                   }}>
                       <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.5)] transition hover:shadow-[0_0_25px_rgba(220,38,38,0.8)]">
                           FINISH WORKOUT
                       </button>
                   </form>
              </div>
          </div>
      )}
    </div>
  );
}

function BlankExerciseLogger({ exercise, sessionId, currentUnit }: { exercise: any, sessionId: string, currentUnit: string }) {
    const [setCount, setSetCount] = useState(1);
    
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-md">
            <div className="px-4 py-3 bg-zinc-800/50 border-b border-zinc-800 flex justify-between items-center">
                <h3 className="font-bold text-white text-lg">{exercise.name}</h3>
                <button 
                    onClick={() => setSetCount(c => c + 1)}
                    className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-2 py-1 rounded transition"
                >
                    + Add Set
                </button>
            </div>
            
            <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 px-1 pb-2 border-b border-zinc-800/50 mb-4">
                     <div className="w-[85px] text-left text-xs font-semibold text-gray-500 uppercase flex-shrink-0">Set / Time</div>
                     <div className="w-16 text-center text-xs font-semibold text-gray-500 uppercase">Weight</div>
                     <div className="w-16 text-center text-xs font-semibold text-gray-500 uppercase">Reps</div>
                     <div className="w-16 text-center text-xs font-semibold text-gray-500 uppercase cursor-help" title="Rate of Perceived Exertion (1=Easy, 10=Max Effort)">
                         RPE <span className="text-[10px] text-gray-600 block leading-none">(1-10)</span>
                     </div>
                     <div className="w-8 ml-auto"></div>
                </div>

                {Array.from({ length: setCount }).map((_, idx) => (
                    <BlankSetInput 
                        key={idx} 
                        setNumber={idx + 1} 
                        exerciseId={exercise.id}
                        sessionId={sessionId}
                        currentUnit={currentUnit}
                    />
                ))}
            </div>
        </div>
    )
}

function BlankSetInput({ setNumber, exerciseId, sessionId, currentUnit }: { setNumber: number, exerciseId: string, sessionId: string, currentUnit: string }) {
    const [logged, setLogged] = useState(false);
    
    const [weight, setWeight] = useState<number | ''>(''); 
    const [reps, setReps] = useState<number | ''>('');
    const [rpe, setRpe] = useState<number | ''>('');

    const [isRunning, setIsRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isRunning && !logged) {
            interval = setInterval(() => {
                setElapsed(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, logged]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const handleLog = async () => {
        if (reps === '') return; // Need at least reps
        setIsRunning(false);
        const finalWeight = weight === '' ? 0 : weight;
        await logSet_Action({
            sessionId,
            exerciseId: exerciseId,
            setNumber,
            weight: finalWeight,
            weightUnit: currentUnit,
            reps: reps as number,
            rpe: rpe === '' ? undefined : (rpe as number),
            duration: elapsed
        });
        setLogged(true);
    };

    return (
        <div className={`flex items-center gap-2 ${logged ? 'opacity-50 grayscale transition-all duration-500' : ''}`}>
             <div className="w-[85px] flex items-center gap-2 flex-shrink-0">
                 <div className="w-4 font-bold text-gray-400 text-sm select-none">{setNumber}</div>
                 <button 
                     onClick={toggleTimer}
                     disabled={logged}
                     className={`w-14 rounded text-xs font-mono py-1.5 transition-colors border shadow-sm ${
                         logged ? 'bg-zinc-800 text-zinc-500 border-zinc-700' : 
                         isRunning ? 'bg-amber-600 hover:bg-amber-500 text-white border-amber-500' : 
                         elapsed > 0 ? 'bg-zinc-700 hover:bg-zinc-600 text-indigo-300 border-zinc-600' : 
                         'bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500'
                     }`}
                 >
                     {elapsed > 0 || isRunning ? formatTime(elapsed) : '▶ Start'}
                 </button>
             </div>
             <input 
                type="number" 
                placeholder={currentUnit}
                value={weight}
                onChange={(e) => setWeight(e.target.value === '' ? '' : parseFloat(e.target.value))}
                className="w-16 bg-zinc-950 border border-zinc-700 rounded px-2 py-2 text-white text-center text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                disabled={logged}
             />
             <input 
                type="number" 
                placeholder="reps"
                value={reps}
                onChange={(e) => setReps(e.target.value === '' ? '' : parseInt(e.target.value))}
                className="w-16 bg-zinc-950 border border-zinc-700 rounded px-2 py-2 text-white text-center text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                disabled={logged}
             />
             <input 
                 type="number" 
                 placeholder="RPE"
                 value={rpe}
                 min="1"
                 max="10"
                 onChange={(e) => {
                     if (e.target.value === '') {
                         setRpe('');
                         return;
                     }
                     const val = parseInt(e.target.value);
                     if (val > 10) setRpe(10);
                     else if (val < 1) setRpe(1);
                     else setRpe(val);
                 }}
                 className="w-16 bg-zinc-950 border border-zinc-700 rounded px-2 py-2 text-white text-center text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
                 disabled={logged}
             />
             <button 
                onClick={handleLog}
                disabled={logged || reps === ''}
                className={`w-10 h-10 ml-auto flex items-center justify-center rounded-lg shadow transition-colors ${logged ? 'bg-green-600 text-white shadow-[0_0_10px_rgba(22,163,74,0.3)]' : 'bg-green-500 hover:bg-green-400 text-white disabled:opacity-50'}`}
             >
                 {logged ? '✓' : '✓'}
             </button>
        </div>
    )
}
