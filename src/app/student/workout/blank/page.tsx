import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import BlankWorkoutLogger from '@/app/ui/student/blank-workout-logger';

export default async function BlankWorkoutSessionPage() {
  const session = await auth();

  if (!session?.user?.id) return null;

  const studentProfile = await prisma.studentProfile.findUnique({
    where: { userId: session.user.id },
  });

  if (!studentProfile) {
    return <div className="text-white p-4">Profile not found.</div>;
  }

  // Fetch all exercises for them to choose from
  const allExercises = await prisma.exercise.findMany({
    orderBy: { name: 'asc' }
  });

  return (
    <div className="max-w-xl mx-auto pb-20 p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-white">Freestyle Workout</h1>
        <p className="text-gray-400 text-sm">Log your own exercises</p>
      </header>

      <BlankWorkoutLogger 
          studentId={studentProfile.id} 
          initialUnit={studentProfile.preferredUnit} 
          allExercises={allExercises} 
      />
    </div>
  );
}
