// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Skills" titleTo="skills" buttonLabel="New Skill" buttonTo="newSkill">
        <Route path="/skills/new" page={SkillNewSkillPage} name="newSkill" />
        <Route path="/skills/{id:Int}/edit" page={SkillEditSkillPage} name="editSkill" />
        <Route path="/skills/{id:Int}" page={SkillSkillPage} name="skill" />
        <Route path="/skills" page={SkillSkillsPage} name="skills" />
      </Set>
      <Set wrap={ScaffoldLayout} title="JobAppliedTos" titleTo="jobAppliedTos" buttonLabel="New JobAppliedTo" buttonTo="newJobAppliedTo">
        <Route path="/job-applied-tos/new" page={JobAppliedToNewJobAppliedToPage} name="newJobAppliedTo" />
        <Route path="/job-applied-tos/{id:Int}/edit" page={JobAppliedToEditJobAppliedToPage} name="editJobAppliedTo" />
        <Route path="/job-applied-tos/{id:Int}" page={JobAppliedToJobAppliedToPage} name="jobAppliedTo" />
        <Route path="/job-applied-tos" page={JobAppliedToJobAppliedTosPage} name="jobAppliedTos" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Experiences" titleTo="experiences" buttonLabel="New Experience" buttonTo="newExperience">
        <Route path="/experiences/new" page={ExperienceNewExperiencePage} name="newExperience" />
        <Route path="/experiences/{id:Int}/edit" page={ExperienceEditExperiencePage} name="editExperience" />
        <Route path="/experiences/{id:Int}" page={ExperienceExperiencePage} name="experience" />
        <Route path="/experiences" page={ExperienceExperiencesPage} name="experiences" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Educations" titleTo="educations" buttonLabel="New Education" buttonTo="newEducation">
        <Route path="/educations/new" page={EducationNewEducationPage} name="newEducation" />
        <Route path="/educations/{id:Int}/edit" page={EducationEditEducationPage} name="editEducation" />
        <Route path="/educations/{id:Int}" page={EducationEducationPage} name="education" />
        <Route path="/educations" page={EducationEducationsPage} name="educations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Frameworks" titleTo="frameworks" buttonLabel="New Framework" buttonTo="newFramework">
        <Route path="/frameworks/new" page={FrameworkNewFrameworkPage} name="newFramework" />
        <Route path="/frameworks/{id:Int}/edit" page={FrameworkEditFrameworkPage} name="editFramework" />
        <Route path="/frameworks/{id:Int}" page={FrameworkFrameworkPage} name="framework" />
        <Route path="/frameworks" page={FrameworkFrameworksPage} name="frameworks" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ProgrammingLanguages" titleTo="programmingLanguages" buttonLabel="New ProgrammingLanguage" buttonTo="newProgrammingLanguage">
        <Route path="/programming-languages/new" page={ProgrammingLanguageNewProgrammingLanguagePage} name="newProgrammingLanguage" />
        <Route path="/programming-languages/{id:Int}/edit" page={ProgrammingLanguageEditProgrammingLanguagePage} name="editProgrammingLanguage" />
        <Route path="/programming-languages/{id:Int}" page={ProgrammingLanguageProgrammingLanguagePage} name="programmingLanguage" />
        <Route path="/programming-languages" page={ProgrammingLanguageProgrammingLanguagesPage} name="programmingLanguages" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Projects" titleTo="projects" buttonLabel="New Project" buttonTo="newProject">
        <Route path="/projects/new" page={ProjectNewProjectPage} name="newProject" />
        <Route path="/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
        <Route path="/projects/{id:Int}" page={ProjectProjectPage} name="project" />
        <Route path="/projects" page={ProjectProjectsPage} name="projects" />
      </Set>
      <Set wrap={ScaffoldLayout} title="UserProfiles" titleTo="userProfiles" buttonLabel="New UserProfile" buttonTo="newUserProfile">
        <Route path="/user-profiles/{id}/edit" page={UserProfileEditUserProfilePage} name="editUserProfile" />
        <Route path="/user-profiles/{id}" page={UserProfileUserProfilePage} name="userProfile" />
      </Set>
      <Route path="/" page={HomePage} name="home" />

      <Private unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="UserProfiles" titleTo="userProfiles" buttonLabel="New UserProfile" buttonTo="newUserProfile">
          <Route path="/user-profiles/new" page={UserProfileNewUserProfilePage} name="newUserProfile" />
          <Route path="/user-profiles/{id:Int}/edit" page={UserProfileEditUserProfilePage} name="editUserProfile" />
          <Route path="/user-profiles/{id:Int}" page={UserProfileUserProfilePage} name="userProfile" />
          <Route path="/user-profiles" page={UserProfileUserProfilesPage} name="userProfiles" />
        </Set>
        <Set path="/dashboard" wrap={DashboardLayout} name="root">
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Set>
      </Private>

      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
