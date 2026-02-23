'use server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function changePassword_Action(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) return { success: false, message: 'Unauthorized' };

    const currentPassword = formData.get('currentPassword') as string;
    const newPassword = formData.get('newPassword') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!newPassword || newPassword.length < 6) {
        return { success: false, message: 'New password must be at least 6 characters long' };
    }
    if (newPassword !== confirmPassword) {
        return { success: false, message: 'New passwords do not match' };
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id }
    });

    if (!user) return { success: false, message: 'User not found' };

    // If they have a current password to check (required for regular change, skip if mandatory, but for security, always good to check. Though if it's mandatory, maybe they don't know it? They logged in with it!)
    if (currentPassword) {
        const passwordsMatch = await bcrypt.compare(currentPassword, user.password);
        if (!passwordsMatch) {
            return { success: false, message: 'Incorrect current password' };
        }
    } else {
        return { success: false, message: 'Current password is required' };
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: { id: user.id },
        data: { 
            password: hashedNewPassword,
            mustChangePassword: false 
        }
    });

    return { success: true, message: 'Password updated successfully' };
}
