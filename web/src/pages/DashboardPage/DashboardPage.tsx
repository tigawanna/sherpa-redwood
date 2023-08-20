import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import UserProfileCell from 'src/components/UserProfile/UserProfileCell'


interface DashboardPageProps {

}

export function DashboardPage({}:DashboardPageProps){
const auth = useAuth()
const user = auth.client.pb_client.authStore.model

return (
  <div className="w-full h-full flex flex-col items-start justify-center">
    <MetaTags title="Dashboard" description="Dashboard page" />
      {user.email}
    <UserProfileCell id={1}/>
  </div>
)
}

export default DashboardPage
