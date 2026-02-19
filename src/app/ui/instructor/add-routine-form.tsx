
'use client';

import { useActionState } from 'react';
import { createRoutine } from '@/lib/actions';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
    >
      {pending ? 'Saving...' : 'Add Routine'}
    </button>
  );
}

export default function AddRoutineForm({ planId }: { planId: string }) {
     const createRoutineWithId = createRoutine.bind(null, planId);
    // @ts-ignore
  const [state, dispatch] = useActionState(createRoutineWithId, null);

  return (
    <form action={dispatch} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Routine Name
        </label>
        <div className="mt-1">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Legs Hypertrophy"
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
