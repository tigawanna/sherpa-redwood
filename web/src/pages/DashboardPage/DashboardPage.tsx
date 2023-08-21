import { MetaTags } from '@redwoodjs/web'
import UserProfileCell from 'src/components/UserProfile/UserProfileCell'
import { useCurrentUser } from 'src/state/hooks/auth'


interface DashboardPageProps {

}

export function DashboardPage({}:DashboardPageProps){
const user = useCurrentUser()
console.log("dashboard page",user)
return (
  <div className="w-full h-full flex items-center justify-center">
    <MetaTags title="Dashboard" description="Dashboard page" />
    <UserProfileCell  id={user.email}/>
  </div>
)
}

export default DashboardPage
