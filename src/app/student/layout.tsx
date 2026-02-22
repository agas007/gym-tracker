
import SignOutButton from '@/app/ui/sign-out-button';
import VersionDisplay from '@/app/ui/version-display';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen bg-zinc-950">
      <div className="flex-1 overflow-auto p-4 pb-24 flex flex-col">
        {children}
        <div className="mt-8 text-center pb-8 border-t border-zinc-900 pt-4">
          <VersionDisplay />
        </div>
      </div>
      <nav className="fixed bottom-0 w-full bg-zinc-900 border-t border-zinc-800 p-4 flex justify-around">
          <a href="/student" className="text-gray-300 hover:text-white text-sm">Dashboard</a>
          <a href="/student/workouts" className="text-gray-300 hover:text-white text-sm">Workouts</a>
          <a href="/student/progress" className="text-gray-300 hover:text-white text-sm">Progress</a>
           <SignOutButton className="text-red-400 hover:text-red-300 text-sm" text="Logout" />
      </nav>
    </div>
  )
}
