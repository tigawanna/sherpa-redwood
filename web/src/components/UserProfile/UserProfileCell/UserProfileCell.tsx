import type { FindUserProfileById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserProfile from 'src/components/UserProfile/UserProfile'
import { ProfileContatiner } from './components/ProfileContatiner'

export const QUERY = gql`
  query FindUserProfileById($id: Int!) {
    userProfile: userProfile(id: $id) {
      id
      createdAt
      updatedAt
      email
      name
      about_me
      image_url
      resumeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserProfile not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className='w-full min-h-sm h-full flex items-center justify-center'>
    <div className="text-error">{error?.message}</div>
  </div>
)

export const Success = (props: CellSuccessProps<FindUserProfileById>) => {
  return <ProfileContatiner props={props} />
}