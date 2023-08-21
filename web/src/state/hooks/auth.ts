import { useAuth } from 'src/auth'

export function useCurrentUser() {
  return useAuth().currentUser as unknown as UseCurrentUser

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
