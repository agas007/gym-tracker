import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import ChangePasswordForm from '@/app/ui/change-password-form';
import SignOutButton from '@/app/ui/sign-out-button';

export default async function PasswordSetupPage() {
    const session = await auth();
    if (!session?.user?.id) return redirect('/login');

    const user = await prisma.user.findUnique({
        where: { id: session.user.id }
    });

    if (!user || (!user.mustChangePassword && process.env.NODE_ENV !== 'development')) {
        // If they don't need to change password, redirect them back to their dashboard (unless in dev mode maybe? no, just strictly redirect)
        if (user?.role === 'ADMIN') return redirect('/admin');
        if (user?.role === 'INSTRUCTOR') return redirect('/instructor');
        return redirect('/student');
    }

    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center p-4">
            <div className="w-full max-w-md mt-12 mb-6 text-center">
                <h1 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2">Gym Tracker</h1>
                <p className="text-gray-400 text-sm">Action Required: Update Password</p>
            </div>
            
            <div className="w-full max-w-md">
                <ChangePasswordForm isMandatory={true} />
            </div>

            <div className="mt-8 text-center text-sm">
                 <SignOutButton text="Back to Login" className="text-gray-500 hover:text-white transition" />
            </div>
        </div>
    );
}
