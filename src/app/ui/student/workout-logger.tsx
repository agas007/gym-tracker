
'use client';

import { useState } from 'react';
import { logSet_Action, finishWorkout_Action, createSession_Action } from '@/lib/actions';

export default function WorkoutLogger({ routine, studentId }: { routine: any, studentId: string }) {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [logs, setLogs] = useState<Record<string, any[]>>({}); // exerciseId -> logs

  const startWorkout = async () => {
      const id = await createSession_Action(studentId, routine.id);
      if (id) {
          setSessionId(id);
          setStarted(true);
      }
  };

  return (
    <div>
      {!started ? (
        <div className="text-center py-10">
           <button 
            onClick={startWorkout}
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-transform transform hover:scale-105"
           >
               START WORKOUT
           </button>
        </div>
      ) : (
          <div className="space-y-8">
              {routine.exercises.map((re: any) => (
                  <ExerciseLogger 
                    key={re.id} 
                    routineExercise={re} 
                    sessionId={sessionId!} 
                  />
              ))}

              <div className="pt-8 pb-12">
                   <form action={async () => {
                       await finishWorkout_Action(sessionId!);
                   }}>
                       <button className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded-lg">
                           FINISH WORKOUT
                       </button>
                   </form>
              </div>
          </div>
      )}
    </div>
  );
}

function ExerciseLogger({ routineExercise, sessionId }: { routineExercise: any, sessionId: string }) {
    const [setsLogged, setSetsLogged] = useState(0);

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-zinc-800/50 border-b border-zinc-800">
                <h3 className="font-bold text-white">{routineExercise.exercise.name}</h3>
                <p className="text-xs text-gray-400">Target: {routineExercise.sets} sets x {routineExercise.reps} reps</p>
            </div>
            <div className="p-4 space-y-3">
                {Array.from({ length: routineExercise.sets }).map((_, idx) => (
                    <SetInput 
                        key={idx} 
                        setNumber={idx + 1} 
                        routineExercise={routineExercise}
                        sessionId={sessionId}
                    />
                ))}
            </div>
        </div>
    )
}

function SetInput({ setNumber, routineExercise, sessionId }: { setNumber: number, routineExercise: any, sessionId: string }) {
    const [logged, setLogged] = useState(false);
    
    // Default values from target
    const [weight, setWeight] = useState(0); 
    const [reps, setReps] = useState(routineExercise.reps);
    const [rpe, setRpe] = useState(routineExercise.rpe || 8);

    const handleLog = async () => {
        await logSet_Action({
            sessionId,
            exerciseId: routineExercise.exercise.id,
            setNumber,
            weight,
            reps,
            rpe
        });
        setLogged(true);
    };

    return (
        <div className={`flex items-center gap-2 ${logged ? 'opacity-50' : ''}`}>
             <div className="w-6 text-center text-gray-500 text-sm font-medium">{setNumber}</div>
             <input 
                type="number" 
                placeholder="kg"
                value={weight || ''}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                className="w-20 bg-zinc-950 border border-zinc-700 rounded px-2 py-1 text-white text-center"
                disabled={logged}
             />
             <input 
                type="number" 
                placeholder="reps"
                value={reps}
                onChange={(e) => setReps(parseInt(e.target.value))}
                className="w-16 bg-zinc-950 border border-zinc-700 rounded px-2 py-1 text-white text-center"
                disabled={logged}
             />
             <input 
                 type="number" 
                 placeholder="RPE"
                 value={rpe || ''}
                 onChange={(e) => setRpe(parseInt(e.target.value))}
                 className="w-14 bg-zinc-950 border border-zinc-700 rounded px-2 py-1 text-white text-center text-xs"
                 disabled={logged}
             />
             <button 
                onClick={handleLog}
                disabled={logged}
                className={`w-8 h-8 flex items-center justify-center rounded ${logged ? 'bg-green-600 text-white' : 'bg-zinc-700 text-gray-300'}`}
             >
                 {logged ? '✓' : '+'}
             </button>
        </div>
    )
}
