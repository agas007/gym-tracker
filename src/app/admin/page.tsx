import WhatsNewWidget from '@/app/ui/whats-new-widget';
import { getTranslations } from 'next-intl/server';

export default async function AdminDashboard() {
  const t = await getTranslations('AdminDashboard');
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">{t('welcome')}</h2>
      <p className="text-gray-400 mb-8">{t('description')}</p>
      
      <div className="max-w-2xl">
          <WhatsNewWidget />
      </div>
    </div>
  );
}
