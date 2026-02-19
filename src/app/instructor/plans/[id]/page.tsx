
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function PlanDetailsPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
  const session = await auth();
  if (!session?.user?.id) return null;

  const plan = await prisma.workoutPlan.findUnique({
    where: { id: params.id },
    include: {
      routines: {
        include: {
          exercises: {
            include: {
              exercise: true
            },
            orderBy: { order: 'asc' }
          }
        }
      },
      student: {
          include: {
              user: true
          }
      },
      instructor: true
    }
  });

  if (!plan) return <div>Plan not found</div>;

  // Simple authorization check
  if (plan.instructor.userId !== session.user.id) {
      return <div>Unauthorized access to this plan.</div>
  }

  return (
    <div className="text-white">
      <div className="mb-8 flex justify-between items-start">
        <div>
            <div className="flex items-center gap-4">
                 <h1 className="text-3xl font-bold">{plan.name}</h1>
                 {plan.student && (
                     <span className="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30">
                        Assigned to: {plan.student.user.name}
                     </span>
                 )}
            </div>
            <p className="text-gray-400 mt-2">{plan.description}</p>
        </div>
        <div className="flex gap-2">
            <Link
                href={`/instructor/plans/${plan.id}/assign`}
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors border border-zinc-700"
            >
                Assign to Student
            </Link>
             <Link
                href={`/instructor/plans/${plan.id}/add-routine`}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
                Add Routine
            </Link>
        </div>
      </div>

      <div className="space-y-6">
        {plan.routines.length === 0 ? (
           <div className="text-center py-12 bg-zinc-900 border border-zinc-800 rounded-lg">
               <p className="text-gray-500">No routines added yet. Start by adding a routine (e.g. "Push Day", "Leg Day").</p>
           </div>
        ) : (
            plan.routines.map((routine: any) => (
                <div key={routine.id} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                    <div className="px-6 py-4 bg-zinc-800/50 border-b border-zinc-800 flex justify-between items-center">
                        <h3 className="text-lg font-semibold">{routine.name}</h3>
                        <Link href={`/instructor/plans/routines/${routine.id}/add-exercise`} className="text-sm text-indigo-400 hover:text-indigo-300">
                            + Add Exercise
                        </Link>
                    </div>
                    <div className="p-6">
                        {routine.exercises.length === 0 ? (
                            <p className="text-sm text-gray-500 italic">No exercises yet.</p>
                        ) : (
                            <table className="min-w-full divide-y divide-zinc-800">
                                <thead>
                                    <tr>
                                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">Exercise</th>
                                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">Sets</th>
                                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">Reps</th>
                                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">RPE</th>
                                        <th className="text-left text-xs font-medium text-gray-400 uppercase tracking-wider pb-2">Rest</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800">
                                    {routine.exercises.map((re: any) => (
                                        <tr key={re.id}>
                                            <td className="py-2 text-sm text-gray-300">{re.exercise.name}</td>
                                            <td className="py-2 text-sm text-gray-400">{re.sets}</td>
                                            <td className="py-2 text-sm text-gray-400">{re.reps}</td>
                                            <td className="py-2 text-sm text-gray-400">{re.rpe || '-'}</td>
                                            <td className="py-2 text-sm text-gray-400">{re.restTime ? `${re.restTime}s` : '-'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
}
