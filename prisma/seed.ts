import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {

  const instructorEmail = 'coach@gym.com';
  const studentEmail = 'student@gym.com';
  const password = await bcrypt.hash('password123', 10);

  // Admin
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'admin@gym.com' },
  });

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email: 'admin@gym.com',
        name: 'Admin User',
        password,
        role: 'ADMIN',
      },
    });
    console.log('Admin user created');
  }

  // Instructor
  const existingInstructor = await prisma.user.findUnique({
    where: { email: instructorEmail },
  });

  if (!existingInstructor) {
    await prisma.user.create({
      data: {
        email: instructorEmail,
        name: 'Coach Mike',
        password,
        role: 'INSTRUCTOR',
        instructorProfile: {
          create: {}
        }
      },
    });
    console.log('Instructor user created');
  }

  // Student
  const existingStudent = await prisma.user.findUnique({
    where: { email: studentEmail },
  });

  if (!existingStudent) {
    // Find the instructor to link
    const instructor = await prisma.user.findUnique({
        where: { email: instructorEmail },
        include: { instructorProfile: true }
    });

    if (instructor && instructor.instructorProfile) {
        await prisma.user.create({
        data: {
            email: studentEmail,
            name: 'John Student',
            password,
            role: 'STUDENT',
            studentProfile: {
            create: {
                instructorId: instructor.instructorProfile.id
            }
            }
        },
        });

        console.log('Student user created');
    }
  }

  // Exercises
  const exercises = [
    { name: 'Squat', muscleGroup: 'Legs' },
    { name: 'Bench Press', muscleGroup: 'Chest' },
    { name: 'Deadlift', muscleGroup: 'Back' },
    { name: 'Overhead Press', muscleGroup: 'Shoulders' },
    { name: 'Barbell Row', muscleGroup: 'Back' },
    { name: 'Pull Up', muscleGroup: 'Back' },
    { name: 'Dumbbell Curl', muscleGroup: 'Biceps' },
    { name: 'Tricep Extension', muscleGroup: 'Triceps' },
    { name: 'Leg Press', muscleGroup: 'Legs' },
    { name: 'Hamstring Curl', muscleGroup: 'Legs' },
  ];

  for (const ex of exercises) {
    const existing = await prisma.exercise.findFirst({ where: { name: ex.name } });
    if (!existing) {
        await prisma.exercise.create({ data: ex });
    }
  }
  console.log('Exercises seeded');

}


main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
