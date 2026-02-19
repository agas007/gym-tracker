
import AssignPlanForm from '@/app/ui/instructor/assign-plan-form';
import { prisma } from '@/lib/prisma';
import { auth } from '@/auth';

export default async function AssignPlanPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
  const planId = params.id;
  const session = await auth();

  if (!session?.user?.id) return null;

  const instructorProfile = await prisma.instructorProfile.findUnique({
      where: { userId: session.user.id },
      include: {
          students: {
              include: { user: true }
          }
      }
  });

  if (!instructorProfile) return <div>Instructor not found</div>;

  const students = instructorProfile.students;

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Assign Plan to Student</h1>
      <div className="bg-zinc-900 shadow sm:rounded-lg p-6 border border-zinc-800">
        <AssignPlanForm planId={planId} students={students} />
      </div>
    </div>
  );
}
