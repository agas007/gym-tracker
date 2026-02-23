'use server';

import { signIn, signOut, auth } from '@/auth';
import { AuthError } from 'next-auth';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const StudentSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function createStudent(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id || session.user.role !== 'INSTRUCTOR') {
        return { message: 'Unauthorized' };
    }

    const validatedFields = StudentSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Student.',
        };
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const instructor = await prisma.instructorProfile.findUnique({
            where: { userId: session.user.id }
        });

        if (!instructor) return { message: 'Instructor profile not found' };

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'STUDENT',
                studentProfile: {
                    create: {
                        instructorId: instructor.id
                    }
                }
            }
        });
    } catch (error) {
        console.error(error);
        return { message: 'Database Error: Failed to Create Student.' };
    }


    redirect('/instructor/students');
}

const PlanSchema = z.object({
  name: z.string().min(1, "Plan Name is required"),
  description: z.string().optional(),
  studentIds: z.array(z.string()).optional() // For assigning to multiple students (future feature) but simple select for now
});

export async function createWorkoutPlan(prevState: any, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== 'INSTRUCTOR') {
      return { message: 'Unauthorized' };
  }

  const name = formData.get('name') as string;
  const description = formData.get('description') as string;

  if (!name) {
      return { message: 'Plan Name is required' };
  }

  try {
      const instructor = await prisma.instructorProfile.findUnique({
          where: { userId: session.user.id }
      });

      if (!instructor) return { message: 'Instructor profile not found' };

      await prisma.workoutPlan.create({
          data: {
              name,
              description,
              instructorId: instructor.id
          }
      });
  } catch (error) {
     console.error(error);
     return { message: 'Database Error: Failed to Create Plan.' };
  }


  redirect('/instructor/plans');
}

export async function createRoutine(planId: string, prevState: any, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== 'INSTRUCTOR') {
      return { message: 'Unauthorized' };
  }

  const name = formData.get('name') as string;
  if (!name) {
      return { message: 'Routine Name is required' };
  }

  try {
      const plan = await prisma.workoutPlan.findUnique({
          where: { id: planId },
          include: { instructor: true }
      });

      if (!plan) return { message: 'Plan not found' };
      if (plan.instructor.userId !== session.user.id) return { message: 'Unauthorized' };

      await prisma.workoutRoutine.create({
          data: {
              name,
              planId: plan.id
          }
      });
  } catch (error) {
     console.error(error);
     return { message: 'Database Error: Failed to Create Routine.' };
  }


  redirect(`/instructor/plans/${planId}`);
}

export async function addExerciseToRoutine(routineId: string, prevState: any, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== 'INSTRUCTOR') {
      return { message: 'Unauthorized' };
  }

  const exerciseId = formData.get('exerciseId') as string;
  const sets = parseInt(formData.get('sets') as string);
  const reps = parseInt(formData.get('reps') as string);
  const rpe = formData.get('rpe') ? parseInt(formData.get('rpe') as string) : null;
  const restTime = formData.get('restTime') ? parseInt(formData.get('restTime') as string) : null;

  if (!exerciseId || isNaN(sets) || isNaN(reps)) {
     return { message: 'Exercise, sets, and reps are required.' };
  }

  try {
     const routine = await prisma.workoutRoutine.findUnique({
         where: { id: routineId },
         include: { exercises: true }
     });

     if (!routine) return { message: 'Routine not found' };

     // Basic auth check: Check if plan belongs to instructor
     const plan = await prisma.workoutPlan.findUnique({
        where: { id: routine.planId },
        include: { instructor: true }
     });

     if (plan?.instructor.userId !== session.user.id) return { message: 'Unauthorized' };

     await prisma.routineExercise.create({
         data: {
             routineId,
             exerciseId,
             sets,
             reps,
             rpe,
             restTime,
             order: routine.exercises.length + 1
         }
     });

  } catch (error) {
     console.error(error);
     return { message: 'Database Error: Failed to add exercise.' };
  }

  // Redirect back to plan details
  const routine = await prisma.workoutRoutine.findUnique({ where: { id: routineId } });

  redirect(`/instructor/plans/${routine?.planId}`);
}

export async function assignPlanToStudent(planId: string, prevState: any, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== 'INSTRUCTOR') {
      return { message: 'Unauthorized' };
  }

  const studentIds = formData.getAll('studentIds') as string[];

  if (!studentIds || studentIds.length === 0) {
      return { message: 'Student selection is required' };
  }

  try {
     // Check if plan exists and belongs to instructor
     const plan = await prisma.workoutPlan.findUnique({
        where: { id: planId },
        include: { instructor: true }
     });

     if (!plan) return { message: 'Plan not found' };
     if (plan.instructor.userId !== session.user.id) return { message: 'Unauthorized' };

     // Check if all students exist and belong to instructor
     const students = await prisma.studentProfile.findMany({
         where: { 
             id: { in: studentIds },
             instructorId: plan.instructorId 
         }
     });
     
     if (students.length !== studentIds.length) return { message: 'One or more invalid students selected' };

     await prisma.workoutPlan.update({
         where: { id: planId },
         data: {
             students: {
                 set: studentIds.map(id => ({ id }))
             }
         }
     });

  } catch (error) {
     console.error(error);
     return { message: 'Database Error: Failed to assign plan.' };
  }

  redirect(`/instructor/plans/${planId}`);
}

export async function sendReminder_Action(studentId: string, prevState: any, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== 'INSTRUCTOR') {
      return { message: 'Unauthorized' };
  }

  // Get the message from form (default one if empty)
  const customMessage = formData.get('message') as string;
  const finalMessage = customMessage ? customMessage : "Don't forget to push yourself today! Your daily workout is waiting for you.";

  try {
     const student = await prisma.studentProfile.findUnique({
         where: { id: studentId },
         include: { user: true }
     });
     
     if (!student) return { message: 'Student not found' };

     await prisma.notification.create({
         data: {
             userId: student.userId,
             message: finalMessage,
             type: 'REMINDER'
         }
     });

  } catch (error) {
     console.error(error);
     return { message: 'Database Error: Failed to send reminder.' };
  }

  // redirect or revalidate path works, returning success message for simple UI feedback
  return { success: true, message: 'Reminder sent successfully!' };
}

// Student logging actions

export async function createSession_Action(studentId: string, routineId?: string) {
    const session = await auth();
    if (!session?.user?.id) return null;

    // TODO: Verify student ID matches logged in user or user has instructor access

    const newSession = await prisma.workoutSession.create({
        data: {
            studentId,
            routineId: routineId || null,
            status: 'IN_PROGRESS'
        }
    });

    return newSession.id;
}

export async function logSet_Action(data: {
    sessionId: string;
    exerciseId: string;
    setNumber: number;
    weight: number;
    weightUnit: string;
    reps: number;
    rpe?: number;
    duration?: number;
}) {
    await prisma.sessionLog.create({
        data: {
            sessionId: data.sessionId,
            exerciseId: data.exerciseId,
            setNumber: data.setNumber,
            weight: data.weight,
            weightUnit: data.weightUnit,
            reps: data.reps,
            rpe: data.rpe,
            duration: data.duration
        }
    });
}

export async function updatePreferredUnit_Action(unit: string) {
    const session = await auth();
    if (!session?.user?.id) return { success: false, message: 'Unauthorized' };

    try {
        await prisma.studentProfile.update({
            where: { userId: session.user.id },
            data: { preferredUnit: unit }
        });
        revalidatePath('/student');
        return { success: true };
    } catch (e) {
        return { success: false, message: 'Failed to update preferred unit' };
    }
}

export async function finishWorkout_Action(sessionId: string, duration?: number) {
    await prisma.workoutSession.update({
        where: { id: sessionId },
        data: { 
            status: 'COMPLETED',
            duration: duration
        }
    });
    redirect('/student');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function updatePersonalData_Action(data: { age: number | null, gender: string | null, height: number | null }) {
    const session = await auth();
    if (!session?.user?.id) return { success: false, message: 'Unauthorized' };

    try {
        await prisma.studentProfile.update({
            where: { userId: session.user.id },
            data: {
                age: data.age,
                gender: data.gender,
                height: data.height
            }
        });
        revalidatePath('/student/profile');
        revalidatePath('/student');
        return { success: true };
    } catch (e) {
        return { success: false, message: 'Failed to update personal data' };
    }
}

export async function logBodyMeasurement_Action(data: { weight: number }) {
    const session = await auth();
    if (!session?.user?.id) return { success: false, message: 'Unauthorized' };

    const profile = await prisma.studentProfile.findUnique({
        where: { userId: session.user.id }
    });

    if (!profile) return { success: false, message: 'Profile not found' };

    let bmi = null;
    if (profile.height && data.weight) {
        const heightMeters = profile.height / 100;
        bmi = data.weight / (heightMeters * heightMeters);
        // Round to 1 decimal place
        bmi = Math.round(bmi * 10) / 10;
    }

    try {
        // Find if they already logged today
        const today = new Date();
        today.setHours(0,0,0,0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const existingLog = await prisma.bodyMeasurement.findFirst({
            where: {
                studentId: profile.id,
                date: {
                    gte: today,
                    lt: tomorrow
                }
            }
        });

        if (existingLog) {
            await prisma.bodyMeasurement.update({
                where: { id: existingLog.id },
                data: { weight: data.weight, bmi }
            });
        } else {
            await prisma.bodyMeasurement.create({
                data: {
                    studentId: profile.id,
                    weight: data.weight,
                    bmi
                }
            });
        }
        revalidatePath('/student');
        revalidatePath('/student/progress');
        return { success: true };
    } catch (e) {
        return { success: false, message: 'Failed to log measurement' };
    }
}

export async function logOut_Action() {
  await signOut({ redirectTo: '/' });
}
