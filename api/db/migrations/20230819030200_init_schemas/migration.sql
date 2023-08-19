-- CreateTable
CREATE TABLE "JobSeekerResume" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "JobSeekerExperience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "description" TEXT,
    "resumeId" INTEGER NOT NULL,
    CONSTRAINT "JobSeekerExperience_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "JobSeekerResume" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JobSeekerEducation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "school" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "resumeId" INTEGER NOT NULL,
    CONSTRAINT "JobSeekerEducation_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "JobSeekerResume" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JobApliedTo" (
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
    CONSTRAINT "JobApliedTo_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "JobSeekerResume" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "JobApliedTo_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProgramingLanguages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "color" TEXT,
    "userProfileId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProgramingLanguages_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desciotion" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userProfileId" INTEGER,
    "resumeId" INTEGER,
    CONSTRAINT "Skill_userProfileId_fkey" FOREIGN KEY ("userProfileId") REFERENCES "UserProfile" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Skill_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "JobSeekerResume" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "bio" TEXT,
    "location" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "website" TEXT,
    "github" TEXT,
    "twitter" TEXT,
    "linkedin" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "JobApliedTo_title_key" ON "JobApliedTo"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ProgramingLanguages_name_key" ON "ProgramingLanguages"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_email_key" ON "UserProfile"("email");
