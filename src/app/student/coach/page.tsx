import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default async function CoachPage() {
    const session = await auth();

    if (!session?.user?.id) {
        return <div className="text-white p-4">Not authenticated</div>;
    }

    // Fetch the student's profile to find their assigned coach
    const studentProfile = await prisma.studentProfile.findUnique({
        where: { userId: session.user.id },
        include: {
            instructor: {
                include: {
                    user: true
                }
            }
        }
    });

    if (!studentProfile) {
        return <div className="text-white p-4">Student profile not found.</div>;
    }

    const assignedCoach = studentProfile.instructor?.user;

    return (
        <div className="text-white">
            <header className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Your Coach</h2>
                <p className="text-gray-400 mt-1">Information about your assigned fitness instructor.</p>
            </header>

            {assignedCoach ? (
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col items-center">
                    <div className="w-24 h-24 mb-4 bg-zinc-800 rounded-full flex items-center justify-center border-2 border-indigo-500 shadow-lg">
                        <UserCircleIcon className="w-20 h-20 text-zinc-600" />
                    </div>
                    <h3 className="text-xl font-bold">{assignedCoach.name}</h3>
                    <p className="text-indigo-400 font-medium mb-4">Lead Instructor</p>
                    
                    <div className="w-full bg-zinc-950 rounded-lg p-4 mb-4 border border-zinc-800 text-left">
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-3 mb-3">
                            <span className="text-zinc-500 text-sm">Email Address</span>
                            <span className="text-white font-medium">{assignedCoach.email}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-zinc-500 text-sm">Status</span>
                            <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span> Active
                            </span>
                        </div>
                    </div>
                    
                    <p className="text-sm text-zinc-400 text-center leading-relaxed">
                        If you have any questions about your routine or need your workout plan updated, you can reach out to your coach via email.
                    </p>
                </div>
            ) : (
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                    <UserCircleIcon className="w-16 h-16 text-zinc-600 mb-4" />
                    <h3 className="text-lg font-bold text-white">No Coach Assigned</h3>
                    <p className="text-zinc-400 text-sm mt-2 max-w-sm">
                        You haven't been assigned to a coach yet. Please contact the administrator.
                    </p>
                </div>
            )}
        </div>
    );
}
