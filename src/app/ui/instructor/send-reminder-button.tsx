'use client';

import { useActionState } from 'react';
import { sendReminder_Action } from '@/lib/actions';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full block text-center rounded-md bg-zinc-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 ring-1 ring-inset ring-zinc-600 transition disabled:opacity-50"
    >
      {pending ? 'Sending...' : 'Send Reminder'}
    </button>
  );
}

export default function SendReminderButton({ studentId }: { studentId: string }) {
    const sendReminderWithId = sendReminder_Action.bind(null, studentId);
    // @ts-ignore
    const [state, dispatch] = useActionState(sendReminderWithId, null);

    return (
        <form action={dispatch} className="w-full">
            <input 
                type="hidden" 
                name="message" 
                value="Don't forget to push yourself today! Your daily workout is waiting for you." 
            />
            <SubmitButton />
            {state?.message && (
                <p className={`mt-2 text-xs text-center ${state.success ? 'text-green-400' : 'text-red-400'}`}>
                    {state.message}
                </p>
            )}
        </form>
    );
}
