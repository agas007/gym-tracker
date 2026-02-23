import SignOutButton from '@/app/ui/sign-out-button';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import PersonalDataForm from '@/app/ui/student/personal-data-form';

export default async function StudentProfilePage() {
    const session = await auth();
    if (!session?.user?.id) return null;

    const studentProfile = await prisma.studentProfile.findUnique({
        where: { userId: session.user.id },
    });

    if (!studentProfile) return <div>Profile not found</div>;

    return (
        <div className="text-white p-4">
            <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
            
            <PersonalDataForm profile={studentProfile} />

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                 <h3 className="text-lg font-medium mb-4">Account</h3>
                 <p className="text-gray-400 text-sm mb-6">Manage your account preferences and view your details here.</p>
                 
                 <div className="border-t border-zinc-800 pt-6">
                     <SignOutButton text="Log Out" className="w-full bg-red-600/10 hover:bg-red-600/20 text-red-500 py-3 rounded-lg font-semibold transition" />
                 </div>
            </div>
        </div>
    )
}
