import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import UserProfileCell from 'src/components/UserProfileCell'
import { useCurrentUser } from 'src/state/hooks/auth'


interface DashboardPageProps {

}

export function DashboardPage({}:DashboardPageProps){
const user = useAuth()
console.log("dashboard",user)
return (
  <div className="w-full h-full flex items-center justify-center">
    <MetaTags title="Dashboard" description="Dashboard page" />
    <UserProfileCell  id={""}/>
  </div>
)
}

export default DashboardPage
