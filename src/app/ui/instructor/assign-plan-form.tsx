
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

export default function AssignPlanForm({ planId, students, assignedStudentIds = [] }: { planId: string, students: any[], assignedStudentIds?: string[] }) {
    const assignPlanWithId = assignPlanToStudent.bind(null, planId);
    // @ts-ignore
  const [state, dispatch] = useActionState(assignPlanWithId, null);

  return (
    <form action={dispatch} className="space-y-6">
      <div>
        <fieldset>
          <legend className="block text-sm font-medium text-gray-300 mb-2">
            Select Students
          </legend>
          <div className="mt-1 space-y-2 border border-zinc-700/50 rounded-md p-3 max-h-60 overflow-y-auto bg-white/5">
              {students.length === 0 ? (
                  <p className="text-sm text-gray-500 italic px-2">No students available.</p>
              ) : (
                  students.map((student) => (
                      <div key={student.id} className="relative flex items-start py-1">
                          <div className="flex h-6 items-center">
                              <input
                                  id={`student-${student.id}`}
                                  name="studentIds"
                                  type="checkbox"
                                  value={student.id}
                                  defaultChecked={assignedStudentIds.includes(student.id)}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 bg-zinc-900 border-zinc-700"
                              />
                          </div>
                          <div className="ml-3 text-sm leading-6">
                              <label htmlFor={`student-${student.id}`} className="font-medium text-white cursor-pointer select-none flex flex-col">
                                  <span>{student.user.name}</span>
                                  <span className="text-gray-400 font-normal text-xs">{student.user.email}</span>
                              </label>
                          </div>
                      </div>
                  ))
              )}
          </div>
        </fieldset>
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
