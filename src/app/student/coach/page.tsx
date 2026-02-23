import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

export default async function StudentCoach() {
    const session = await auth();
    if (!session?.user?.id) return null;

    const studentProfile = await prisma.studentProfile.findUnique({
        where: { userId: session.user.id },
        include: {
            instructor: {
                include: { user: true }
            }
        }
    });

    if (!studentProfile) return <div>Profile not found</div>;

    const coach = studentProfile.instructor?.user;

    return (
        <div className="text-white p-4">
            <h2 className="text-2xl font-bold mb-6">Your Coach</h2>
            
            {!coach ? (
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center">
                     <p className="text-gray-400">You don't have an assigned coach yet. Contact the admin to assign you to a coach.</p>
                </div>
            ) : (
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                            {coach.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{coach.name}</h3>
                            <p className="text-sm text-gray-400">Certified Instructor</p>
                        </div>
                    </div>
                    
                    <div className="space-y-4 pt-6 border-t border-zinc-800">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Email</p>
                            <p className="text-gray-300">{coach.email}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Status</p>
                            <p className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-medium">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                Active
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
