
'use client';

import { useActionState } from 'react';
import { assignPlanToStudent } from '@/lib/actions';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
    >
      {pending ? 'Assigning...' : 'Assign Plan'}
    </button>
  );
}

export default function AssignPlanForm({ planId, students }: { planId: string, students: any[] }) {
    const assignPlanWithId = assignPlanToStudent.bind(null, planId);
    // @ts-ignore
  const [state, dispatch] = useActionState(assignPlanWithId, null);

  return (
    <form action={dispatch} className="space-y-6">
      <div>
        <label htmlFor="studentId" className="block text-sm font-medium text-gray-300">
          Select Student
        </label>
        <div className="mt-1">
            <select
                id="studentId"
                name="studentId"
                className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&>option]:text-black"
            >
                <option value="">Select a student...</option>
                {students.map((student) => (
                    <option key={student.id} value={student.id}>{student.user.name} ({student.user.email})</option>
                ))}
            </select>
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
