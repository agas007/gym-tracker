
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function InstructorDashboard() {
  const session = await auth();
  
  if (!session?.user?.id) return null;

  const instructorProfile = await prisma.instructorProfile.findUnique({
    where: { userId: session.user.id },
    include: {
      students: {
        include: {
          user: true
        }
      }
    }
  });

  if (!instructorProfile) {
    return <div className="text-white">Profile not found. Please contact admin.</div>;
  }

  const studentCount = instructorProfile.students.length;

  return (
    <div className="text-white">
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-gray-400 mt-2">Welcome back, Coach {session.user.name}</p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Stats Card */}
        <div className="bg-zinc-900 overflow-hidden rounded-lg shadow border border-zinc-800">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* Icon Placeholder */}
                <div className="h-10 w-10 rounded-md bg-indigo-500 flex items-center justify-center text-white">
                   👥
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="truncate text-sm font-medium text-gray-400">Total Students</dt>
                  <dd>
                    <div className="text-lg font-medium text-white">{studentCount}</div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800/50 px-5 py-3">
            <div className="text-sm">
              <Link href="/instructor/students" className="font-medium text-indigo-400 hover:text-indigo-300">
                View all
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Action Card: Add Student */}
         <div className="bg-zinc-900 overflow-hidden rounded-lg shadow border border-zinc-800">
          <div className="p-5">
             <h3 className="text-lg font-medium leading-6 text-white">Quick Actions</h3>
             <div className="mt-4 flex flex-col space-y-3">
                <Link href="/instructor/students/new" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    Add New Student
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
