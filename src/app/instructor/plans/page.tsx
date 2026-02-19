
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function PlansPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const instructorProfile = await prisma.instructorProfile.findUnique({
    where: { userId: session.user.id },
    include: {
      plans: {
        orderBy: { updatedAt: 'desc' },
        include: {
           routines: true
        }
      }
    }
  });

  if (!instructorProfile) {
    return <div>Profile not found</div>;
  }

  const plans = instructorProfile.plans;

  return (
    <div className="text-white">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-white">Workout Plans</h1>
          <p className="mt-2 text-sm text-gray-400">
            Create and manage workout templates for your students.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/instructor/plans/new"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Plan
          </Link>
        </div>
      </div>
      
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-zinc-900 overflow-hidden rounded-lg shadow border border-zinc-800 flex flex-col">
            <div className="p-5 flex-1">
              <h3 className="text-lg font-medium leading-6 text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-400 line-clamp-2">{plan.description || "No description"}</p>
              <div className="mt-4">
                 <span className="inline-flex items-center rounded-md bg-zinc-800 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-zinc-700">
                    {plan.routines.length} Routines
                 </span>
              </div>
            </div>
            <div className="bg-zinc-800/50 px-5 py-3">
              <div className="text-sm">
                <Link href={`/instructor/plans/${plan.id}`} className="font-medium text-indigo-400 hover:text-indigo-300">
                  Manage Plan
                </Link>
              </div>
            </div>
          </div>
        ))}
        {plans.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
                You haven't created any plans yet.
            </div>
        )}
      </div>
    </div>
  );
}
