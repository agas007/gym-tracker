import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function StudentWorkouts() {
    const session = await auth();
    if (!session?.user?.id) return null;

    const studentProfile = await prisma.studentProfile.findUnique({
        where: { userId: session.user.id },
    });

    if (!studentProfile) return <div>Profile not found</div>;

    const pastSessions = await prisma.workoutSession.findMany({
        where: { 
            studentId: studentProfile.id,
            status: 'COMPLETED'
        },
        include: {
            routine: true,
            logs: {
                include: { exercise: true }
            }
        },
        orderBy: { date: 'desc' }
    });

    const formatDuration = (sec: number) => {
        const m = Math.floor(sec / 60);
        return `${m}m`;
    }

    return (
        <div className="text-white p-4 pb-24">
            <h2 className="text-2xl font-bold mb-6">Workout History</h2>
            
            {pastSessions.length === 0 ? (
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
                    <p className="text-gray-400 mb-4">You haven't completed any workouts yet.</p>
                    <Link href="/student" className="text-indigo-400 hover:text-indigo-300 font-medium">
                        Go back to Dashboard
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {pastSessions.map(session => (
                        <div key={session.id} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                            <div className="px-4 py-3 border-b border-zinc-800 flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-white">
                                        {session.routine?.name || "Freestyle Workout"}
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        {new Date(session.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                                    </p>
                                </div>
                                {session.duration && (
                                    <div className="bg-indigo-600/20 text-indigo-400 px-2.5 py-1 rounded text-xs font-semibold">
                                        ⏱ {formatDuration(session.duration)}
                                    </div>
                                )}
                            </div>
                            <div className="p-4 bg-zinc-900/50">
                                <p className="text-sm font-medium text-gray-300 mb-3">Exercises performed:</p>
                                <ul className="space-y-2">
                                    {/* Group logs by exercise */}
                                    {Object.values(session.logs.reduce((acc: any, log: any) => {
                                        if (!acc[log.exerciseId]) {
                                            acc[log.exerciseId] = { exercise: log.exercise, sets: 0, totalWeight: 0, unit: log.weightUnit || 'kg' };
                                        }
                                        acc[log.exerciseId].sets += 1;
                                        if (log.weight > acc[log.exerciseId].totalWeight) acc[log.exerciseId].totalWeight = log.weight; // Max weight
                                        return acc;
                                    }, {})).map((stat: any, i) => (
                                        <li key={i} className="flex justify-between items-center text-sm border-b border-zinc-800/50 pb-2 last:border-0 last:pb-0">
                                            <span className="text-gray-400">{stat.exercise.name} <span className="text-gray-600 text-xs">({stat.sets} sets)</span></span>
                                            <span className="text-gray-300 font-medium">{stat.totalWeight > 0 ? `${stat.totalWeight} ${stat.unit}` : 'Bodyweight'}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
