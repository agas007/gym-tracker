import { prisma } from '@/lib/prisma';

export default async function WorkoutCalendar({ studentId }: { studentId: string }) {
    // Determine the start of the week (Monday)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = today.getDay(); // 0 (Sun) to 6 (Sat)
    const diff = today.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    const startOfWeek = new Date(today.setDate(diff));

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    // Fetch past workouts for this week
    const recentSessions = await prisma.workoutSession.findMany({
        where: {
            studentId,
            date: {
                gte: startOfWeek,
                lte: endOfWeek,
            }
        },
        include: {
            routine: true
        }
    });

    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    // Create an array representing the current week
    const weekDates = Array.from({ length: 7 }).map((_, i) => {
        const d = new Date(startOfWeek);
        d.setDate(startOfWeek.getDate() + i);
        return d;
    });

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-6">
            <h3 className="text-white font-semibold mb-4 text-sm flex items-center justify-between">
                <span>This Week</span>
            </h3>
            <div className="flex justify-between items-center gap-1">
                {weekDates.map((date, i) => {
                    const isToday = new Date().toDateString() === date.toDateString();
                    const sessionsForDay = recentSessions.filter(s => new Date(s.date).toDateString() === date.toDateString());
                    const completed = sessionsForDay.some(s => s.status === 'COMPLETED');

                    return (
                        <div key={i} className="flex flex-col items-center flex-1">
                            <span className="text-[10px] text-gray-400 mb-1">{days[i]}</span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium relative ${
                                completed ? 'bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.5)]' :
                                isToday ? 'bg-zinc-800 border-2 border-indigo-500 text-white' : 
                                'bg-zinc-800 text-gray-500'
                            }`}>
                                {date.getDate()}
                                {completed && (
                                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-3 h-3 border-2 border-zinc-900 flex items-center justify-center">
                                         <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            {recentSessions.length > 0 && (
                <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-xs text-indigo-400 font-medium">{recentSessions.filter(s => s.status === 'COMPLETED').length} workout{recentSessions.filter(s => s.status === 'COMPLETED').length !== 1 ? 's' : ''} completed this week</p>
                </div>
            )}
        </div>
    );
}
