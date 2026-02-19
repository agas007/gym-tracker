
import AddStudentForm from '@/app/ui/instructor/add-student-form';

export default function AddStudentPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Add New Student</h1>
      <div className="bg-zinc-900 shadow sm:rounded-lg p-6 border border-zinc-800">
        <AddStudentForm />
      </div>
    </div>
  );
}
