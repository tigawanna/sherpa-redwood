/*
  Warnings:

  - You are about to drop the `ProgrammningLanguage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `programmningLanguagesId` on the `Framework` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProgrammningLanguage";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ProgrammingLanguage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "resumeId" INTEGER,
    CONSTRAINT "ProgrammingLanguage_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Framework" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "githubUrl" TEXT,
    "programmingLanguagesId" INTEGER,
    CONSTRAINT "Framework_programmingLanguagesId_fkey" FOREIGN KEY ("programmingLanguagesId") REFERENCES "ProgrammingLanguage" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Framework" ("createdAt", "description", "githubUrl", "id", "name", "updatedAt") SELECT "createdAt", "description", "githubUrl", "id", "name", "updatedAt" FROM "Framework";
DROP TABLE "Framework";
ALTER TABLE "new_Framework" RENAME TO "Framework";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
