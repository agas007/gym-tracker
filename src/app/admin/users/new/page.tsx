'use client';

import { useActionState } from 'react';
import { createInstructor } from '@/lib/actions-admin';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function AddInstructorPage() {
    type ActionState = { message: string; errors?: Record<string, string[]> };
    const initialState: ActionState = { message: '', errors: {} };
    const [state, dispatch, isPending] = useActionState(
        createInstructor as (prevState: ActionState, formData: FormData) => Promise<ActionState>,
        initialState,
    );

    return (
        <div className="text-white max-w-2xl">
            <header className="mb-6 flex flex-col gap-4">
                <Link href="/admin/users" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 text-sm">
                    <ArrowLeftIcon className="w-4 h-4" /> Back to Users
                </Link>
                <div>
                   <h2 className="text-2xl font-bold tracking-tight">Add New Instructor</h2>
                   <p className="text-gray-400 mt-1">Create an account for a new fitness instructor.</p>
                </div>
            </header>

            <form action={dispatch} className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-6">
                 <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 bg-zinc-950 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                    {state.errors?.name && (
                        <p className="mt-2 text-sm text-red-500">{state.errors.name[0]}</p>
                    )}
                 </div>

                 <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="block w-full rounded-md border-0 bg-zinc-950 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                    {state.errors?.email && (
                        <p className="mt-2 text-sm text-red-500">{state.errors.email[0]}</p>
                    )}
                 </div>

                 <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                        Temporary Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        minLength={6}
                        className="block w-full rounded-md border-0 bg-zinc-950 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-zinc-800 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                    {state.errors?.password && (
                        <p className="mt-2 text-sm text-red-500">{state.errors.password[0]}</p>
                    )}
                    <p className="text-xs text-zinc-500 mt-2">The instructor will be forced to change this password upon their first login.</p>
                 </div>

                 {state.message && (
                     <div className="rounded-md bg-red-500/10 border border-red-500/20 p-4">
                        <p className="text-sm text-red-400 font-medium">{state.message}</p>
                     </div>
                 )}

                 <div className="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                     <Link href="/admin/users" className="px-4 py-2 border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-semibold transition-colors">
                        Cancel
                     </Link>
                     <button
                        type="submit"
                        disabled={isPending}
                        className="bg-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-white px-6 py-2 rounded-lg font-bold shadow transition-colors disabled:opacity-50 flex items-center gap-2"
                     >
                        {isPending ? 'Creating...' : 'Create Instructor'}
                     </button>
                 </div>
            </form>
        </div>
    );
}
