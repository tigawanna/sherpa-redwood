import type { FindUserProfileById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { ProfileContatiner } from './components/ProfileContatiner'
import { ProfileForm } from './components/ProfileForm'

export const QUERY = gql`
  query FindUserProfileById($id: String!) {
    userProfile: userProfile(id: $id) {
      id
      createdAt
      updatedAt
      email
      name
      about_me
      image_url
      country
      city
      phone
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>UserProfile not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className='w-full min-h-sm h-full flex flex-col items-center justify-center'>
    <div className="text-error">{error?.message}</div>
    <ProfileForm/>
  </div>
)

export const Success = (props: CellSuccessProps<FindUserProfileById>) => {
  return <ProfileContatiner props={props} />
}
