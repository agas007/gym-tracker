import SignOutButton from '@/app/ui/sign-out-button';
import VersionDisplay from '@/app/ui/version-display';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
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
        <h1 className="text-xl font-bold text-white mb-8">Admin Panel</h1>
        <nav className="space-y-4 flex-1">
          <a href="/admin" className="block text-gray-300 hover:text-white">Dashboard</a>
          <a href="/admin/users" className="block text-gray-300 hover:text-white">Users</a>
          <a href="/admin/profile" className="block text-gray-300 hover:text-white">Profile</a>
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
