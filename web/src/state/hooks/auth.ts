import { useAuth } from 'src/auth'
import { useState } from 'react'
export function useCurrentUser() {
  const [user, setUser] = useState<UseCurrentUser|null>(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  useAuth()
    .getCurrentUser()
    .then((user) => {
      setLoading(false)
      setUser(user as any)
    })
    .catch((error) => {
      setLoading(false)
      setUser(null)
      setError(error)

    })
    .finally(() => {
      setLoading(false)
    })
    return { data:user, error, loading }
}


export interface UseCurrentUser {
  aud: string
  exp: number
  iat: number
  iss: string
  sub: string
  email: string
  phone: string
  app_metadata: AppMetadata
  user_metadata: UserMetadata
  role: string
  aal: string
  amr: Amr[]
  session_id: string
  roles: any[]
}
interface AppMetadata {
  provider: string
  providers: string[]
}

interface UserMetadata {
  avatar_url: string
  email: string
  email_verified: boolean
  full_name: string
  iss: string
  name: string
  preferred_username: string
  provider_id: string
  sub: string
  user_name: string
}

interface Amr {
  method: string
  timestamp: number
}
