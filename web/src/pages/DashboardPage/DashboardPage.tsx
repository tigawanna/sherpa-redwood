import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import UserProfileCell from 'src/components/UserProfile/UserProfileCell'
import { useCurrentUser } from 'src/state/hooks/auth'


interface DashboardPageProps {

}

export function DashboardPage({}:DashboardPageProps){
const user = useCurrentUser()
console.log("current user  = ",user?.data?.email)
return (
  <div className="w-full h-full flex items-center justify-center">
    <MetaTags title="Dashboard" description="Dashboard page" />

    <h1 className='min-w-xs'>{user?.data?.email}</h1>
    <UserProfileCell id={1}/>
  </div>
)
}

export default DashboardPage
