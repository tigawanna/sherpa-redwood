import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
console.log('process envs  ===  ', process.env.REDWOOD_ENV_PB_URL)
// console.log('env variables  ===  ', import.meta.env)
const HomePage = () => {
  return (
    <div className='min-h-screen h-full w-full flex flex-col items-center justify-center '>
      <MetaTags title="Home" description="Home page" />

      <h1 className='text-6xl font-bold'>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </div>
  )
}

export default HomePage
