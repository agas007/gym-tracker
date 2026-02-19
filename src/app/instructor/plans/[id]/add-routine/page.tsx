
import AddRoutineForm from '@/app/ui/instructor/add-routine-form';

export default async function AddRoutinePage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Add Routine to Plan</h1>
      <div className="bg-zinc-900 shadow sm:rounded-lg p-6 border border-zinc-800">
        <AddRoutineForm planId={params.id} />
      </div>
    </div>
  );
}
