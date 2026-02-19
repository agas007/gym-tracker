
import { signOut } from '@/auth';

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-zinc-950">
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
        <h1 className="text-xl font-bold text-white mb-8">Instructor Panel</h1>
        <nav className="space-y-4">
          <a href="/instructor" className="block text-gray-300 hover:text-white">Overview</a>
          <a href="/instructor/students" className="block text-gray-300 hover:text-white">Students</a>
          <a href="/instructor/plans" className="block text-gray-300 hover:text-white">Workout Plans</a>
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
