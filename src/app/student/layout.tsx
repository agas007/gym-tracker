
import { signOut } from '@/auth';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen bg-zinc-950">
      <div className="flex-1 overflow-auto p-4 pb-20">
        {children}
      </div>
       {/* Bottom Navigation for Mobile */}
      <nav className="fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-800 p-4 flex justify-around">
          <a href="/student" className="text-gray-300 hover:text-white text-sm">Dashboard</a>
          <a href="/student/workouts" className="text-gray-300 hover:text-white text-sm">Workouts</a>
          <a href="/student/progress" className="text-gray-300 hover:text-white text-sm">Progress</a>
           <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
             <button className="text-red-400 hover:text-red-300 text-sm">Logout</button>
          </form>
      </nav>
    </div>
  )
}
