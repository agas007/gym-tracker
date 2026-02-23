import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';

export default async function StudentWorkouts() {
    return (
        <div className="text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Your Workouts</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
                 <p className="text-gray-400 mb-4">View your past logs and all assigned routines here.</p>
                 <Link href="/student" className="text-indigo-400 hover:text-indigo-300">
                     Go back to Dashboard
                 </Link>
            </div>
        </div>
    )
}
