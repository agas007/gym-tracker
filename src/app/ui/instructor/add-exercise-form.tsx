
'use client';

import { useActionState } from 'react';
import { addExerciseToRoutine } from '@/lib/actions';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
    >
      {pending ? 'Saving...' : 'Add Exercise'}
    </button>
  );
}

export default function AddExerciseForm({ routineId, exercises }: { routineId: string, exercises: any[] }) {
    const addExerciseWithId = addExerciseToRoutine.bind(null, routineId);
    // @ts-ignore
  const [state, dispatch] = useActionState(addExerciseWithId, null);

  return (
    <form action={dispatch} className="space-y-6">
      <div>
        <label htmlFor="exerciseId" className="block text-sm font-medium text-gray-300">
          Select Exercise
        </label>
        <div className="mt-1">
            <select
                id="exerciseId"
                name="exerciseId"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&>option]:text-black"
            >
                {exercises.map((ex) => (
                    <option key={ex.id} value={ex.id}>{ex.name}</option>
                ))}
            </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
            <label htmlFor="sets" className="block text-sm font-medium text-gray-300">Sets</label>
            <input
                id="sets"
                name="sets"
                type="number"
                defaultValue={3}
                required
                className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
        </div>
        <div>
            <label htmlFor="reps" className="block text-sm font-medium text-gray-300">Reps</label>
            <input
                id="reps"
                name="reps"
                type="number"
                defaultValue={10}
                required
                className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
        </div>
        <div>
            <label htmlFor="rpe" className="block text-sm font-medium text-gray-300">Target RPE (Optional)</label>
            <input
                id="rpe"
                name="rpe"
                type="number"
                max={10}
                className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
        </div>
         <div>
            <label htmlFor="restTime" className="block text-sm font-medium text-gray-300">Rest (sec) (Optional)</label>
            <input
                id="restTime"
                name="restTime"
                type="number"
                defaultValue={60}
                className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
        </div>
      </div>

      {state?.message && (
          <div className="text-sm text-red-500">
              {state.message}
          </div>
      )}

      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
