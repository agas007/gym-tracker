'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const InstructorSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function createInstructor(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id || session.user.role !== 'ADMIN') {
        return { message: 'Unauthorized' };
    }

    const validatedFields = InstructorSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Instructor.',
        };
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'INSTRUCTOR',
                mustChangePassword: true,
                instructorProfile: {
                    create: {}
                }
            }
        });
    } catch (error) {
        return { message: 'Database Error: Failed to Create Instructor.' };
    }

    revalidatePath('/admin/users');
    redirect('/admin/users');
}
