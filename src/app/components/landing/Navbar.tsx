import Link from 'next/link';
import LanguageSwitcher from '@/app/ui/LanguageSwitcher';
import { getTranslations } from 'next-intl/server';

export default async function Navbar() {
  const t = await getTranslations('Landing.Navbar');
  return (
    <nav className="bg-zinc-950/80 backdrop-blur-md fixed w-full z-50 top-0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
              ATLAS<span className="text-indigo-500">TRACK</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('features')}
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('pricing')}
              </Link>
              <LanguageSwitcher />
              <Link
                href="/login"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20"
              >
                {t('signIn')}
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden gap-3">
            <LanguageSwitcher />
            <Link
                href="/login"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t('login')}
              </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
