/*
  Warnings:

  - You are about to drop the `JobApliedTo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "JobApliedTo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "JobAppliedTo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "company" TEXT,
    "location" TEXT,
    "url" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "resumeId" INTEGER NOT NULL,
    "userProfileId" INTEGER,
    CONSTRAINT "JobAppliedTo_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "JobSeekerResume" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "JobAppliedTo_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "JobAppliedTo_title_key" ON "JobAppliedTo"("title");
