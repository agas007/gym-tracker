import VersionDisplay from '@/app/ui/version-display';
import StudentBottomNav from '@/app/ui/student/bottom-nav';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col h-screen bg-zinc-950 font-sans overflow-hidden">
      <div className="flex-1 overflow-auto p-4 pb-32 flex flex-col">
        {children}
        <div className="mt-8 text-center pb-8 border-t border-zinc-900 pt-4">
          <VersionDisplay />
        </div>
      </div>
      <StudentBottomNav />
    </div>
  )
}
