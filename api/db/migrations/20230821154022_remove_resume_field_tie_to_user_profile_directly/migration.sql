/*
  Warnings:

  - You are about to drop the `JobExperience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resume` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `resumeId` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Education` table. All the data in the column will be lost.
  - The primary key for the `UserProfile` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `resumeId` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `JobAppliedTo` table. All the data in the column will be lost.
  - You are about to drop the column `resumeId` on the `ProgrammingLanguage` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "JobExperience_title_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "JobExperience";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Resume";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Experience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "company" TEXT,
    "location" TEXT,
    "url" TEXT,
    "years" INTEGER NOT NULL,
    "userProfileId" TEXT,
    CONSTRAINT "Experience_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userProfileId" TEXT,
    CONSTRAINT "Skill_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Skill" ("createdAt", "description", "id", "name", "updatedAt", "url") SELECT "createdAt", "description", "id", "name", "updatedAt", "url" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
CREATE TABLE "new_Education" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "institute" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "years" INTEGER NOT NULL,
    "userProfileId" TEXT,
    CONSTRAINT "Education_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Education" ("createdAt", "id", "institute", "level", "updatedAt", "years") SELECT "createdAt", "id", "institute", "level", "updatedAt", "years" FROM "Education";
DROP TABLE "Education";
ALTER TABLE "new_Education" RENAME TO "Education";
CREATE TABLE "new_UserProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "about_me" TEXT NOT NULL,
    "image_url" TEXT NOT NULL
);
INSERT INTO "new_UserProfile" ("about_me", "createdAt", "email", "id", "image_url", "name", "updatedAt") SELECT "about_me", "createdAt", "email", "id", "image_url", "name", "updatedAt" FROM "UserProfile";
DROP TABLE "UserProfile";
ALTER TABLE "new_UserProfile" RENAME TO "UserProfile";
CREATE UNIQUE INDEX "UserProfile_email_key" ON "UserProfile"("email");
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repoUrl" TEXT NOT NULL,
    "userProfileId" TEXT,
    CONSTRAINT "Project_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("createdAt", "description", "id", "name", "repoUrl", "updatedAt") SELECT "createdAt", "description", "id", "name", "repoUrl", "updatedAt" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_JobAppliedTo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "company" TEXT,
    "location" TEXT,
    "url" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userProfileId" TEXT,
    CONSTRAINT "JobAppliedTo_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_JobAppliedTo" ("company", "createdAt", "description", "id", "location", "title", "updatedAt", "url", "userProfileId") SELECT "company", "createdAt", "description", "id", "location", "title", "updatedAt", "url", "userProfileId" FROM "JobAppliedTo";
DROP TABLE "JobAppliedTo";
ALTER TABLE "new_JobAppliedTo" RENAME TO "JobAppliedTo";
CREATE UNIQUE INDEX "JobAppliedTo_title_key" ON "JobAppliedTo"("title");
CREATE TABLE "new_ProgrammingLanguage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "projectId" INTEGER,
    CONSTRAINT "ProgrammingLanguage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ProgrammingLanguage" ("color", "createdAt", "id", "name", "updatedAt") SELECT "color", "createdAt", "id", "name", "updatedAt" FROM "ProgrammingLanguage";
DROP TABLE "ProgrammingLanguage";
ALTER TABLE "new_ProgrammingLanguage" RENAME TO "ProgrammingLanguage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Experience_title_key" ON "Experience"("title");
