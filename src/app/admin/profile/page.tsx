import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import ChangePasswordForm from '@/app/ui/change-password-form';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

export default async function AdminProfilePage() {
    const session = await auth();
    if (!session?.user?.id) return redirect('/login');

    const user = await prisma.user.findUnique({
        where: { id: session.user.id }
    });

    const t = await getTranslations('AdminProfile');

    if (!user) return <div>{t('userNotFound')}</div>;

    return (
        <div className="max-w-xl text-white">
            <h2 className="text-2xl font-bold mb-6">{t('title')}</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
                 <p className="text-gray-400">{t('name')}: <span className="text-white font-medium">{user.name}</span></p>
                 <p className="text-gray-400 mt-2">{t('email')}: <span className="text-white font-medium">{user.email}</span></p>
            </div>
            <ChangePasswordForm />
        </div>
    )
}
