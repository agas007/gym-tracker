import SignOutButton from '@/app/ui/sign-out-button';
import VersionDisplay from '@/app/ui/version-display';
import LanguageSwitcher from '@/app/ui/LanguageSwitcher';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
  if (session?.user?.id) {
     const user = await prisma.user.findUnique({ where: { id: session.user.id } });
     if (user?.mustChangePassword) {
         redirect('/password-setup');
     }
  }

  const t = await getTranslations('AdminLayout');

  return (
    <div className="flex h-screen bg-zinc-950">
      <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col h-full">
        <h1 className="text-xl font-bold text-white mb-8">{t('adminPanel')}</h1>
        <nav className="space-y-4 flex-1">
          <a href="/admin" className="block text-gray-300 hover:text-white">{t('nav.dashboard')}</a>
          <a href="/admin/users" className="block text-gray-300 hover:text-white">{t('nav.users')}</a>
          <a href="/admin/profile" className="block text-gray-300 hover:text-white">{t('nav.profile')}</a>
          <SignOutButton text={t('nav.signOut')} />
        </nav>
        <div className="space-y-4">
          <LanguageSwitcher />
          <VersionDisplay />
        </div>
      </div>
      <div className="flex-1 overflow-auto p-8">
        {children}
      </div>
    </div>
  )
}
