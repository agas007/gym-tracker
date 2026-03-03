'use client';

import { useLocale } from 'next-intl';
import { setLocale } from '@/app/actions/locale';

export default function LanguageSwitcher() {
  const locale = useLocale();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLocale(newLocale).then(() => {
      window.location.reload();
    });
  };

  return (
    <select
      value={locale}
      onChange={handleLocaleChange}
      className="bg-zinc-800 text-gray-200 border border-zinc-700 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500"
    >
      <option value="id">ID</option>
      <option value="en">EN</option>
    </select>
  );
}
