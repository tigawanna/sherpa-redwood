import { toast } from '@redwoodjs/web/dist/toast'
import { FaGithub } from 'react-icons/fa'
import { LuLoader } from 'react-icons/lu'
import { useAuth } from 'src/auth'

interface GithubOauthProps {}

export function GithubOauth({}: GithubOauthProps) {
const { logIn,loading,error } = useAuth()



  function loginwithgithub() {
    return logIn({
      authMethod: 'oauth',
      provider: 'github',
    }).then(() => toast.success('Logged in successfully'))
      .catch((error) => toast.error(error.message))
  }

  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center w-full border-opacity-50">
        <div style={{ border: error ? '1px solid #f00' : '' }}
          className="elevation-5 p-2 w-fit rounded-xl hover:shadow hover:shadow-accent"
        >
          {loading ? (
            <LuLoader className="w-9 h-9 animate-spin" />
          ) : (
            <FaGithub className="w-9 h-9 " onClick={() => loginwithgithub()} />
          )}
        </div>
      </div>
    </div>
  )
}
