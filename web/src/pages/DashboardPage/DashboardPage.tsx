import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import UserProfileCell from 'src/components/UserProfile/UserProfileCell'


interface DashboardPageProps {

}

export function DashboardPage({}:DashboardPageProps){
return (
  <div className="w-full h-full flex items-center justify-center">
    <MetaTags title="Dashboard" description="Dashboard page" />
    <UserProfileCell id={1}/>
  </div>
)
}

export default DashboardPage
