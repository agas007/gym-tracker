import WhatsNewWidget from '@/app/ui/whats-new-widget';

export default function AdminDashboard() {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Welcome, Admin</h2>
      <p className="text-gray-400 mb-8">Manage your gym users and system settings here.</p>
      
      <div className="max-w-2xl">
          <WhatsNewWidget />
      </div>
    </div>
  );
}
