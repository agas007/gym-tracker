'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export default function AdminStatsFilter({ t }: { t: Record<string, string> }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  const currentFilter = searchParams.get('filter') || 'all';

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set('filter', e.target.value);
    
    startTransition(() => {
        router.push(`?${params.toString()}`);
    });
  };

  return (
    <select
      value={currentFilter}
      onChange={handleChange}
      disabled={isPending}
      className={`bg-zinc-800 text-white border border-zinc-700 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <option value="all">{t.filterAll}</option>
      <option value="yearly">{t.filterYearly}</option>
      <option value="monthly">{t.filterMonthly}</option>
      <option value="weekly">{t.filterWeekly}</option>
      <option value="daily">{t.filterDaily}</option>
    </select>
  );
}
