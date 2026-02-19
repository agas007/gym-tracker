
import { signOut } from '@/auth';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-zinc-950">
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
        <h1 className="text-xl font-bold text-white mb-8">Admin Panel</h1>
        <nav className="space-y-4">
          <a href="/admin" className="block text-gray-300 hover:text-white">Dashboard</a>
          <a href="/admin/users" className="block text-gray-300 hover:text-white">Users</a>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="text-red-400 hover:text-red-300 w-full text-left">Sign Out</button>
          </form>
        </nav>
      </div>
      <div className="flex-1 overflow-auto p-8">
        {children}
      </div>
    </div>
  )
}
