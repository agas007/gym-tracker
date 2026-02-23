-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SessionLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "setNumber" INTEGER NOT NULL,
    "weight" REAL NOT NULL,
    "weightUnit" TEXT NOT NULL DEFAULT 'kg',
    "reps" INTEGER NOT NULL,
    "rpe" INTEGER,
    "duration" INTEGER,
    "notes" TEXT,
    CONSTRAINT "SessionLog_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "WorkoutSession" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SessionLog_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_SessionLog" ("duration", "exerciseId", "id", "notes", "reps", "rpe", "sessionId", "setNumber", "weight") SELECT "duration", "exerciseId", "id", "notes", "reps", "rpe", "sessionId", "setNumber", "weight" FROM "SessionLog";
DROP TABLE "SessionLog";
ALTER TABLE "new_SessionLog" RENAME TO "SessionLog";
CREATE TABLE "new_StudentProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "instructorId" TEXT,
    "preferredUnit" TEXT NOT NULL DEFAULT 'kg',
    CONSTRAINT "StudentProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StudentProfile_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "InstructorProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_StudentProfile" ("id", "instructorId", "userId") SELECT "id", "instructorId", "userId" FROM "StudentProfile";
DROP TABLE "StudentProfile";
ALTER TABLE "new_StudentProfile" RENAME TO "StudentProfile";
CREATE UNIQUE INDEX "StudentProfile_userId_key" ON "StudentProfile"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
