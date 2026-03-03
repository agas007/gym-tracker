import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function AdminUsersPage() {
    const t = await getTranslations('AdminUsersPage');
    const instructors = await prisma.user.findMany({
        where: { role: 'INSTRUCTOR' },
        include: {
            instructorProfile: {
                include: {
                    students: true
                }
            }
        },
        orderBy: { name: 'asc' }
    });

    const students = await prisma.user.findMany({
        where: { role: 'STUDENT' },
        include: {
            studentProfile: {
                include: {
                    instructor: {
                        include: { user: true }
                    }
                }
            }
        },
        orderBy: { name: 'asc' }
    });

    return (
        <div className="text-white">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-2xl font-bold">{t('title')}</h2>
                    <p className="text-gray-400">{t('description')}</p>
                </div>
                <div className="flex gap-3">
                    <Link href="/admin/users/new-student" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded font-bold shadow transition-colors">
                        {t('addStudent')}
                    </Link>
                    <Link href="/admin/users/new" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded font-bold shadow transition-colors">
                        {t('addInstructor')}
                    </Link>
                </div>
            </div>

            <div className="space-y-8">
                {/* Instructors Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-indigo-400">{t('instructorsCount', { count: instructors.length })}</h3>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-zinc-950 border-b border-zinc-800 uppercase text-xs text-gray-400">
                                <tr>
                                    <th className="px-6 py-3 font-semibold">{t('table.name')}</th>
                                    <th className="px-6 py-3 font-semibold">{t('table.email')}</th>
                                    <th className="px-6 py-3 font-semibold">{t('table.assignedStudents')}</th>
                                    <th className="px-6 py-3 font-semibold">{t('table.addedOn')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                {instructors.map((inst) => (
                                    <tr key={inst.id} className="hover:bg-zinc-800/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{inst.name}</td>
                                        <td className="px-6 py-4 text-gray-300">{inst.email}</td>
                                        <td className="px-6 py-4 text-gray-300">
                                            {inst.instructorProfile?.students.length || 0}
                                        </td>
                                        <td className="px-6 py-4 text-gray-300">
                                            {inst.createdAt.toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                                {instructors.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                            {t('table.noInstructors')}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Students Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">{t('studentsCount', { count: students.length })}</h3>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-zinc-950 border-b border-zinc-800 uppercase text-xs text-gray-400">
                                <tr>
                                    <th className="px-6 py-3 font-semibold">{t('table.name')}</th>
                                    <th className="px-6 py-3 font-semibold">{t('table.email')}</th>
                                    <th className="px-6 py-3 font-semibold">{t('table.assignedCoach')}</th>
                                    <th className="px-6 py-3 font-semibold">{t('table.addedOn')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                {students.map((student) => {
                                    const coachName = student.studentProfile?.instructor?.user?.name || t('table.unassigned');
                                    return (
                                        <tr key={student.id} className="hover:bg-zinc-800/50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-white">{student.name}</td>
                                            <td className="px-6 py-4 text-gray-300">{student.email}</td>
                                            <td className="px-6 py-4 text-gray-300">{coachName}</td>
                                            <td className="px-6 py-4 text-gray-300">
                                                {student.createdAt.toLocaleDateString()}
                                            </td>
                                        </tr>
                                    );
                                })}
                                {students.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                            {t('table.noStudents')}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
