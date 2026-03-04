import WhatsNewWidget from '@/app/ui/whats-new-widget';
import { getTranslations } from 'next-intl/server';
import { prisma } from '@/lib/prisma';
import AdminStatsFilter from '@/app/ui/admin/AdminStatsFilter';

function UsersIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function AcademicCapIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

export default async function AdminDashboard(props: { searchParams?: Promise<{ filter?: string }> }) {
  const parsedSearchParams = await props.searchParams;
  const filter = parsedSearchParams?.filter || 'all';

  let dateFilter = {};
  if (filter !== 'all') {
    const now = new Date();
    if (filter === 'daily') now.setDate(now.getDate() - 1);
    else if (filter === 'weekly') now.setDate(now.getDate() - 7);
    else if (filter === 'monthly') now.setMonth(now.getMonth() - 1);
    else if (filter === 'yearly') now.setFullYear(now.getFullYear() - 1);
    
    dateFilter = { createdAt: { gte: now } };
  }

  const [totalUsers, totalStudents, totalInstructors, topInstructors] = await Promise.all([
    prisma.user.count({ where: dateFilter }),
    prisma.user.count({ where: { role: 'STUDENT', ...dateFilter } }),
    prisma.user.count({ where: { role: 'INSTRUCTOR', ...dateFilter } }),
    prisma.instructorProfile.findMany({
      include: {
        user: true,
        _count: { select: { students: true } }
      },
      orderBy: {
        students: { _count: 'desc' }
      },
      take: 5
    })
  ]);

  const t = await getTranslations('AdminDashboard');
  const ts = await getTranslations('AdminDashboardStats');

  // Prepare dictionary for Client Component
  const statsFilterDict = {
    filterAll: ts('filterAll'),
    filterYearly: ts('filterYearly'),
    filterMonthly: ts('filterMonthly'),
    filterWeekly: ts('filterWeekly'),
    filterDaily: ts('filterDaily'),
  };

  return (
    <div className="text-white space-y-8">
      {/* Header Section */}
      <div>
        <h2 className="text-2xl font-bold mb-2">{t('welcome')}</h2>
        <p className="text-gray-400">{t('description')}</p>
      </div>

      {/* Statistics Section */}
      <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 shadow-sm relative">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">{ts('title')}</h3>
          <AdminStatsFilter t={statsFilterDict} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card: Total Users */}
          <div className="bg-zinc-950 p-5 rounded-lg border border-zinc-800 flex items-center space-x-4 hover:border-indigo-500/50 transition-colors">
            <div className="bg-indigo-500/10 p-3 rounded-md text-indigo-400">
              <UsersIcon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">{ts('totalUsers')}</p>
              <p className="text-3xl font-bold text-white mt-1">{totalUsers}</p>
            </div>
          </div>
          
          {/* Card: Total Students */}
          <div className="bg-zinc-950 p-5 rounded-lg border border-zinc-800 flex items-center space-x-4 hover:border-emerald-500/50 transition-colors">
            <div className="bg-emerald-500/10 p-3 rounded-md text-emerald-400">
              <AcademicCapIcon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">{ts('totalStudents')}</p>
              <p className="text-3xl font-bold text-white mt-1">{totalStudents}</p>
            </div>
          </div>

          {/* Card: Total Instructors */}
          <div className="bg-zinc-950 p-5 rounded-lg border border-zinc-800 flex items-center space-x-4 hover:border-orange-500/50 transition-colors">
            <div className="bg-orange-500/10 p-3 rounded-md text-orange-400">
              <BriefcaseIcon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium">{ts('totalInstructors')}</p>
              <p className="text-3xl font-bold text-white mt-1">{totalInstructors}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Instructors List */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 shadow-sm">
          <h3 className="text-xl font-bold mb-1">{ts('topInstructorsTitle')}</h3>
          <p className="text-sm text-gray-400 mb-6">{ts('topInstructorsDesc')}</p>
          
          <div className="space-y-4">
            {topInstructors.length > 0 ? (
               topInstructors.map((instructor, idx) => (
                  <div key={instructor.id} className="flex items-center justify-between p-3 bg-zinc-950 rounded-md border border-zinc-800/50">
                    <div className="flex items-center space-x-4">
                       <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-gray-400">
                          #{idx + 1}
                       </div>
                       <div>
                          <p className="font-medium text-white">{instructor.user.name}</p>
                          <p className="text-xs text-gray-400">{instructor.user.email}</p>
                       </div>
                    </div>
                    <div className="bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 text-indigo-300 text-sm font-semibold text-center whitespace-nowrap">
                       {instructor._count.students} {ts('students')}
                    </div>
                  </div>
               ))
            ) : (
                <div className="text-center py-6 text-gray-500">
                    No instructors found.
                </div>
            )}
          </div>
        </div>

        {/* What's New Panel */}
        <div>
          <WhatsNewWidget />
        </div>
      </div>
    </div>
  );
}
