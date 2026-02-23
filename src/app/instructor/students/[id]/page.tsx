import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import SendReminderButton from '@/app/ui/instructor/send-reminder-button';

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id: studentId } = await params;
  const session = await auth();
  if (!session?.user?.id) return null;

  // Verify instructor owns this student
  const instructorProfile = await prisma.instructorProfile.findUnique({
    where: { userId: session.user.id }
  });

  if (!instructorProfile) return <div>Instructor not found</div>;

  const student = await prisma.studentProfile.findFirst({
    where: { 
        id: studentId,
        instructorId: instructorProfile.id
    },
    include: {
      user: true,
      plans: true,
      workoutSessions: {
          orderBy: { date: 'desc' },
          include: {
              routine: true,
              logs: {
                  include: {
                      exercise: true
                  },
                  orderBy: [
                      { exerciseId: 'asc' },
                      { setNumber: 'asc' }
                  ]
              }
          }
      }
    }
  });

  if (!student) {
      return <div className="text-white">Student not found or unauthorized.</div>
  }

  return (
    <div className="text-white space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{student.user.name}'s Profile</h1>
        <p className="text-gray-400">{student.user.email}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Active Plans */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Assigned Plans</h2>
              {student.plans.length > 0 ? (
                  <ul className="space-y-3">
                      {student.plans.map(plan => (
                          <li key={plan.id} className="bg-zinc-800/50 p-3 rounded border border-zinc-700">
                              <div className="font-medium text-indigo-400">{plan.name}</div>
                              <div className="text-sm text-gray-400">{plan.description || "No description"}</div>
                          </li>
                      ))}
                  </ul>
              ) : (
                  <p className="text-gray-500">No workout plans assigned yet.</p>
              )}
          </div>

          {/* Quick Stats or Actions */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-4 text-center">Actions</h2>
               <div className="space-y-3">
                  <SendReminderButton studentId={student.id} />
                   <Link href={`/instructor/plans`} className="w-full block text-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                      Assign New Plan
                  </Link>
               </div>
          </div>
      </div>

      {/* Progress / Workout History */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Workout History (Progress)</h2>
          
          {student.workoutSessions.length > 0 ? (
              <div className="space-y-8">
                  {student.workoutSessions.map(ws => (
                      <div key={ws.id} className="border-l-2 border-indigo-500 pl-4 py-2">
                          <div className="flex justify-between items-center mb-3">
                             <div>
                                 <h3 className="text-lg font-bold text-white">{ws.routine?.name || 'Freestyle Workout'}</h3>
                                 <p className="text-xs text-gray-400">{new Date(ws.date).toLocaleDateString()} - {new Date(ws.date).toLocaleTimeString()}</p>
                             </div>
                             <span className={`px-2 py-1 text-xs rounded-full ${ws.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'}`}>
                                 {ws.status}
                             </span>
                          </div>

                          {ws.logs.length > 0 ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                  {/* Group logs by exercise internally in the render or pre-process. Here we pre-process slightly for display */}
                                  {Object.entries(
                                      ws.logs.reduce((acc, log) => {
                                          if (!acc[log.exercise.name]) acc[log.exercise.name] = [];
                                          acc[log.exercise.name].push(log);
                                          return acc;
                                      }, {} as Record<string, typeof ws.logs>)
                                  ).map(([exerciseName, logs]) => (
                                      <div key={exerciseName} className="bg-zinc-950 p-3 rounded border border-zinc-800">
                                          <div className="font-semibold text-sm mb-2 text-indigo-300">{exerciseName}</div>
                                          <div className="space-y-1">
                                              {logs.map(log => (
                                                  <div key={log.id} className="flex justify-between text-xs text-gray-400">
                                                      <span>Set {log.setNumber}</span>
                                                      <span>{log.weight} kg x {log.reps} reps <span className="text-zinc-500">@ RPE {log.rpe || '-'}</span></span>
                                                  </div>
                                              ))}
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          ) : (
                              <p className="text-sm text-gray-500 italic mt-2">No exercises logged for this session.</p>
                          )}
                      </div>
                  ))}
              </div>
          ) : (
              <div className="text-center py-10 bg-zinc-950 rounded-lg border border-dashed border-zinc-700">
                  <p className="text-gray-400">No workout history available yet.</p>
              </div>
          )}
      </div>

    </div>
  );
}
