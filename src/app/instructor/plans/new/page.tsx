
import CreatePlanForm from '@/app/ui/instructor/create-plan-form';

export default function CreatePlanPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Create New Workout Plan</h1>
      <div className="bg-zinc-900 shadow sm:rounded-lg p-6 border border-zinc-800">
        <CreatePlanForm />
      </div>
    </div>
  );
}
