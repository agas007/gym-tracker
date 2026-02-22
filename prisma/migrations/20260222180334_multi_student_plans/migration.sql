/*
  Warnings:

  - You are about to drop the column `studentId` on the `WorkoutPlan` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_StudentProfileToWorkoutPlan" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_StudentProfileToWorkoutPlan_A_fkey" FOREIGN KEY ("A") REFERENCES "StudentProfile" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_StudentProfileToWorkoutPlan_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkoutPlan" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkoutPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "instructorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WorkoutPlan_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "InstructorProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WorkoutPlan" ("createdAt", "description", "id", "instructorId", "name", "updatedAt") SELECT "createdAt", "description", "id", "instructorId", "name", "updatedAt" FROM "WorkoutPlan";
DROP TABLE "WorkoutPlan";
ALTER TABLE "new_WorkoutPlan" RENAME TO "WorkoutPlan";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_StudentProfileToWorkoutPlan_AB_unique" ON "_StudentProfileToWorkoutPlan"("A", "B");

-- CreateIndex
CREATE INDEX "_StudentProfileToWorkoutPlan_B_index" ON "_StudentProfileToWorkoutPlan"("B");
