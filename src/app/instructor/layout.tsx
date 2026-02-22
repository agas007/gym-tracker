
import SignOutButton from '@/app/ui/sign-out-button';

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
          <SignOutButton />
        </nav>
      </div>
      <div className="flex-1 overflow-auto p-8">
        {children}
      </div>
    </div>
  )
}
