import { prisma } from '@/lib/prisma';
import NewStudentForm from './form';

export default async function AddStudentPage() {
    const instructors = await prisma.instructorProfile.findMany({
        include: {
            user: true
        },
        orderBy: {
            user: { name: 'asc' }
        }
    });

    const formattedInstructors = instructors.map(inst => ({
        id: inst.id,
        name: inst.user.name
    }));

    return <NewStudentForm instructors={formattedInstructors} />;
}
