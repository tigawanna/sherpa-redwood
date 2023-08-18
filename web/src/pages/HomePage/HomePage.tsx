import { MetaTags } from '@redwoodjs/web'
import { WelcomeSection } from './components/welcome/Welcome'

interface HomePageProps {

}

export default function HomePage({}:HomePageProps){
return (
  <div className="w-full h-full flex items-center justify-center">
    <MetaTags title="Home" description="Home page" />
    <WelcomeSection />
  </div>
)
}
