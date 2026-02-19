
import AddExerciseForm from '@/app/ui/instructor/add-exercise-form';
import { prisma } from '@/lib/prisma';

export default async function AddExercisePage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
  const routineId = params.id;
  const exercises = await prisma.exercise.findMany({
      orderBy: { name: 'asc' }
  });

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Add Exercise to Routine</h1>
      <div className="bg-zinc-900 shadow sm:rounded-lg p-6 border border-zinc-800">
        <AddExerciseForm routineId={routineId} exercises={exercises} />
      </div>
    </div>
  );
}
