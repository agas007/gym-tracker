import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import ProgressDashboard from '@/app/ui/student/progress-dashboard';

export default async function StudentProgress() {
    const session = await auth();
    if (!session?.user?.id) return null;

    const studentProfile = await prisma.studentProfile.findUnique({
        where: { userId: session.user.id }
    });

    if (!studentProfile) return <div>Profile not found</div>;

    // Fetch all completed session logs for weight history
    const pastSessions = await prisma.workoutSession.findMany({
        where: { 
            studentId: studentProfile.id,
            status: 'COMPLETED'
        },
        include: {
            logs: {
                include: { exercise: true }
            }
        },
        orderBy: { date: 'asc' }
    });

    // Extract all logs and attach their session date
    let exercisesLogData: any[] = [];
    pastSessions.forEach(session => {
        session.logs.forEach(log => {
            exercisesLogData.push({
                ...log,
                date: session.date,
                exerciseName: log.exercise.name
            });
        });
    });

    // Fetch body measurements
    const bodyMeasurements = await prisma.bodyMeasurement.findMany({
        where: { studentId: studentProfile.id },
        orderBy: { date: 'asc' }
    });

    return (
        <div className="text-white p-4 pb-24">
            <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
            
            <ProgressDashboard 
                logs={exercisesLogData} 
                bodyMeasurements={bodyMeasurements} 
            />
        </div>
    )
}
