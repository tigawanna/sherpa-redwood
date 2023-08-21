import type { FindUserProfileById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserProfile from 'src/components/UserProfile/UserProfile'
import { ProfileForm } from '../ProfileForm'

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
  <div className="rw-cell-error flex flex-col">
    {error?.message}
    <ProfileForm />
  </div>
)

export const Success = ({
  userProfile,
}: CellSuccessProps<FindUserProfileById>) => {
  return <UserProfile userProfile={userProfile} />
}
