import type { EditUserProfileById, UpdateUserProfileInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import UserProfileForm from 'src/components/UserProfile/UserProfileForm'

export const QUERY = gql`
  query EditUserProfileById($id: Int!) {
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
const UPDATE_USER_PROFILE_MUTATION = gql`
  mutation UpdateUserProfileMutation(
    $id: Int!
    $input: UpdateUserProfileInput!
  ) {
    updateUserProfile(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  userProfile,
}: CellSuccessProps<EditUserProfileById>) => {
  const [updateUserProfile, { loading, error }] = useMutation(
    UPDATE_USER_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('UserProfile updated')
        navigate(routes.userProfiles())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateUserProfileInput,
    id: EditUserProfileById['userProfile']['id']
  ) => {
    updateUserProfile({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserProfile {userProfile?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserProfileForm
          userProfile={userProfile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
