import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  await prisma.studentProfile.findUnique({
    where: { userId: '123' },
    include: {
      plans: {
        include: {
          routines: {
             include: {
                 exercises: {
                     include: { exercise: true },
                     orderBy: { order: 'asc' }
                 }
             }
          },
          instructor: {
              include: { user: true }
          }
        }
      }
    }
  });
}
main().catch(console.error)
