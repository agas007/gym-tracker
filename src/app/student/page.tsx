
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import WhatsNewWidget from '@/app/ui/whats-new-widget';
import UnitSelector from '@/app/ui/student/unit-selector';

export default async function StudentDashboard() {
  const session = await auth();
  
  if (!session?.user?.id) return null;

  const studentProfile = await prisma.studentProfile.findUnique({
    where: { userId: session.user.id },
    include: {
      plans: {
        include: {
          routines: {
             include: {
                 exercises: {
                     include: { exercise: true },
                     orderBy: { order: 'asc' }
                 }
             }
          },
          instructor: {
              include: { user: true }
          }
        }
      }
    }
  });

  if (!studentProfile) {
    return <div className="text-white">Profile not found. Please contact your coach.</div>;
  }

  // Assuming active plan is the most recent one or handles multiple. For now, take the first one.
  const activePlan = studentProfile.plans[0];

  return (
    <div className="text-white">
      <header className="mb-6 flex flex-col gap-4">
        <div>
           <h2 className="text-2xl font-bold tracking-tight">Your Training Plan</h2>
           <p className="text-gray-400 mt-1">Ready to crush it today, {session.user.name}?</p>
        </div>
        <UnitSelector initialUnit={studentProfile.preferredUnit} />
      </header>
      
      <div className="mb-8">
          <WhatsNewWidget />
      </div>

      {!activePlan ? (
          <div className="text-center py-12 bg-zinc-900 border border-zinc-800 rounded-lg">
              <p className="text-gray-500">No workout plan assigned yet. Wait for your coach to assign one!</p>
          </div>
      ) : (
          <div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{activePlan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{activePlan.description}</p>
                  <p className="text-xs text-indigo-400 font-medium uppercase tracking-wide">Coach: {activePlan.instructor.user.name}</p>
              </div>

              <h4 className="text-lg font-semibold mb-4 text-white">Routines</h4>
              <div className="space-y-4">
                  {activePlan.routines.map((routine: any) => (
                      <div key={routine.id} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                          <div className="px-5 py-3 border-b border-zinc-800 flex justify-between items-center bg-zinc-800/30">
                              <h5 className="font-medium text-white">{routine.name}</h5>
                              <Link 
                                href={`/student/workout/${routine.id}`}
                                className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-full font-medium transition-colors"
                              >
                                  Start Workout
                              </Link>
                          </div>
                          <div className="p-4">
                              <ul className="space-y-2">
                                  {routine.exercises.map((re: any) => (
                                      <li key={re.id} className="text-sm text-gray-400 flex justify-between">
                                          <span>{re.exercise.name}</span>
                                          <span>{re.sets} x {re.reps}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      )}
    </div>
  );
}
