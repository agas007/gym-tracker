
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import WorkoutLogger from '@/app/ui/student/workout-logger';

export default async function WorkoutSessionPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
  const routineId = params.id;
  const session = await auth();

  if (!session?.user?.id) return null;

  const routine = await prisma.workoutRoutine.findUnique({
      where: { id: routineId },
      include: {
          exercises: {
              include: { exercise: true },
              orderBy: { order: 'asc' }
          },
          plan: {
              include: { students: true }
          }
      }
  });

  if (!routine) return <div>Routine not found</div>;
  
  const currentStudent = routine.plan.students.find(s => s.userId === session.user?.id);
  if (!currentStudent) return <div>Unauthorized</div>;

  // Check if there is an active session for today, otherwise create one?
  // For MVP, we'll create a new session when they load this page if one isn't "IN_PROGRESS"
  // Or simpler: Just showing the form to log sets.

  // Let's create a session if not exists for today?
  // Actually, allow logging directly. We need a component to handle the logging state.

  return (
    <div className="max-w-xl mx-auto pb-20">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-white">{routine.name}</h1>
        <p className="text-gray-400 text-sm">{routine.plan.name}</p>
      </header>

      <WorkoutLogger routine={routine} studentId={currentStudent.id} initialUnit={currentStudent.preferredUnit} />
    </div>
  );
}
