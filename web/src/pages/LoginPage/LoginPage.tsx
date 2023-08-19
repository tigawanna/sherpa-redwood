import { MetaTags } from '@redwoodjs/web'
import { SigninForm } from './components/SigninForm'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />
      <SigninForm/>
    </>
  )
}

export default LoginPage
