-- AlterTable
ALTER TABLE "StudentProfile" ADD COLUMN "age" INTEGER;
ALTER TABLE "StudentProfile" ADD COLUMN "gender" TEXT;
ALTER TABLE "StudentProfile" ADD COLUMN "height" REAL;

-- CreateTable
CREATE TABLE "BodyMeasurement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "studentId" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weight" REAL NOT NULL,
    "bmi" REAL,
    CONSTRAINT "BodyMeasurement_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "StudentProfile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
