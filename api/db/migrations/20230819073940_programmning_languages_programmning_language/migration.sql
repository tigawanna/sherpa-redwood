/*
  Warnings:

  - You are about to drop the `ProgrammningLanguages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProgrammningLanguages";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ProgrammningLanguage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "resumeId" INTEGER,
    CONSTRAINT "ProgrammningLanguage_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume" ("id") ON DELETE SET NULL ON UPDATE CASCADE
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
    "programmningLanguagesId" INTEGER,
    CONSTRAINT "Framework_programmningLanguagesId_fkey" FOREIGN KEY ("programmningLanguagesId") REFERENCES "ProgrammningLanguage" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Framework" ("createdAt", "description", "githubUrl", "id", "name", "programmningLanguagesId", "updatedAt") SELECT "createdAt", "description", "githubUrl", "id", "name", "programmningLanguagesId", "updatedAt" FROM "Framework";
DROP TABLE "Framework";
ALTER TABLE "new_Framework" RENAME TO "Framework";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
