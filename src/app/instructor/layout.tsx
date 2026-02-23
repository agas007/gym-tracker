import SignOutButton from '@/app/ui/sign-out-button';
import VersionDisplay from '@/app/ui/version-display';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function InstructorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
  if (session?.user?.id) {
     const user = await prisma.user.findUnique({ where: { id: session.user.id } });
     if (user?.mustChangePassword) {
         redirect('/password-setup');
     }
  }

  return (
    <div className="flex h-screen bg-zinc-950">
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col h-full">
        <h1 className="text-xl font-bold text-white mb-8">Instructor Panel</h1>
        <nav className="space-y-4 flex-1">
          <a href="/instructor" className="block text-gray-300 hover:text-white">Overview</a>
          <a href="/instructor/students" className="block text-gray-300 hover:text-white">Students</a>
          <a href="/instructor/plans" className="block text-gray-300 hover:text-white">Workout Plans</a>
          <a href="/instructor/profile" className="block text-gray-300 hover:text-white">Profile</a>
          <SignOutButton />
        </nav>
        <VersionDisplay />
      </div>
      <div className="flex-1 overflow-auto p-8">
        {children}
      </div>
    </div>
  )
}
