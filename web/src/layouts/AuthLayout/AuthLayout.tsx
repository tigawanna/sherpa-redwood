import { useEffect, useState } from "react"
import { useAuth } from "src/auth"
import {Redirect,routes} from '@redwoodjs/router'

type AuthLayoutProps = {
  children?: React.ReactNode
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  const {isAuthenticated} = useAuth()
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      // Simulate a delay of 1 second
      setTimeout(() => {
        // navigate('/dashboard')
        setLoading(false)
      }, 700)
    } else {
      setLoading(false)
    }
  }, [isAuthenticated])

  if (isLoading) {
    // Show a loading state, such as a spinner
    return (
    <div className="w-full flex items-center justify-center min-h-screen bg-secondary-content/60">
      <h2 className="text-2xl text-accent">Already logged in , Rediretiong...</h2>
    </div>)
  }

  if (isAuthenticated) {
    // User is authenticated, redirect to the dashboard
    return <Redirect to={routes.dashboard()} />
  }


  return <>{children}</>
}

export default AuthLayout
