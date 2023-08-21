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
