'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  UserGroupIcon, 
  UserIcon 
} from '@heroicons/react/24/outline';
import { 
  HomeIcon as HomeIconSolid, 
  UserGroupIcon as UserGroupIconSolid, 
  UserIcon as UserIconSolid 
} from '@heroicons/react/24/solid';

// Dumbbell SVG
const DumbbellOutline = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75v16.5M18 3.75v16.5M2.25 6v12M21.75 6v12M9 12h6" />
  </svg>
);

const DumbbellSolid = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M6 3.75a.75.75 0 0 1 .75.75v3.31q.16-.06.33-.11A4.5 4.5 0 0 1 9 12h6a4.5 4.5 0 0 1-1.92 4.19q-.17-.05-.33-.11v3.31a.75.75 0 1 1-1.5 0v-2.25H12.75v2.25a.75.75 0 1 1-1.5 0v-2.25H9v2.25a.75.75 0 1 1-1.5 0v-3.31q-.16.06-.33.11A4.5 4.5 0 0 1 9 12H3a4.5 4.5 0 0 1 1.92-4.19q.17.05.33.11V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    <path d="M18 3.75a.75.75 0 0 1 .75.75v15a.75.75 0 1 1-1.5 0v-15a.75.75 0 0 1 .75-.75ZM2.25 6A.75.75 0 0 1 3 6.75v10.5a.75.75 0 0 1-1.5 0v-10.5A.75.75 0 0 1 2.25 6ZM21.75 6a.75.75 0 0 1 .75.75v10.5a.75.75 0 1 1-1.5 0v-10.5A.75.75 0 0 1 21.75 6Z" />
  </svg>
);


const NAV_ITEMS = [
  {
    name: 'Home',
    href: '/student',
    icon: HomeIcon,
    activeIcon: HomeIconSolid,
  },
  {
    name: 'Workout',
    href: '/student/workouts',
    icon: DumbbellOutline,
    activeIcon: DumbbellSolid,
  },
  {
    name: 'Coach',
    href: '/student/coach',
    icon: UserGroupIcon,
    activeIcon: UserGroupIconSolid,
  },
  {
    name: 'Profile',
    href: '/student/profile',
    icon: UserIcon,
    activeIcon: UserIconSolid,
  },
];

export default function StudentBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 pb-safe pt-2 px-6 flex justify-between items-center z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
      {NAV_ITEMS.map((item) => {
        // Exclude exact matches for subroutes (except for Home which has subroutes but is root, handled by exact match or not)
        const isActive = pathname === item.href || (item.href !== '/student' && pathname?.startsWith(item.href));
        
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link 
            key={item.href} 
            href={item.href}
            className={`flex flex-col items-center justify-center space-y-1 w-16 mb-2 transition-colors ${
              isActive 
                ? 'text-blue-500 font-semibold' 
                : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 font-medium'
            }`}
          >
            <Icon className="w-6 h-6 mb-0.5" />
            <span className="text-[10px] tracking-wide">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
