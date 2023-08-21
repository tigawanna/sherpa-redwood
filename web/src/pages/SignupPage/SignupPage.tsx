import { MetaTags } from '@redwoodjs/web'
import { SignupForm } from './components/SignupForm'

const SignupPage = () => {
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />
      <SignupForm/>
    </>
  )
}

export default SignupPage
