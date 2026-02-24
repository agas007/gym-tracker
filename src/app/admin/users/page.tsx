import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function AdminUsersPage() {
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
                    <h2 className="text-2xl font-bold">Manage Users</h2>
                    <p className="text-gray-400">View and manage system personnel.</p>
                </div>
                <Link href="/admin/users/new" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded font-bold shadow transition-colors">
                    Add Instructor
                </Link>
            </div>

            <div className="space-y-8">
                {/* Instructors Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-indigo-400">Instructors ({instructors.length})</h3>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-zinc-950 border-b border-zinc-800 uppercase text-xs text-gray-400">
                                <tr>
                                    <th className="px-6 py-3 font-semibold">Name</th>
                                    <th className="px-6 py-3 font-semibold">Email</th>
                                    <th className="px-6 py-3 font-semibold">Assigned Students</th>
                                    <th className="px-6 py-3 font-semibold">Added On</th>
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
                                            No instructors found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Students Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">All Students ({students.length})</h3>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-zinc-950 border-b border-zinc-800 uppercase text-xs text-gray-400">
                                <tr>
                                    <th className="px-6 py-3 font-semibold">Name</th>
                                    <th className="px-6 py-3 font-semibold">Email</th>
                                    <th className="px-6 py-3 font-semibold">Assigned Coach</th>
                                    <th className="px-6 py-3 font-semibold">Added On</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-800">
                                {students.map((student) => {
                                    const coachName = student.studentProfile?.instructor?.user?.name || 'Unassigned';
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
                                            No students found.
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
