import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteUserProfileMutationVariables,
  FindUserProfileById,
} from 'types/graphql'

const DELETE_USER_PROFILE_MUTATION = gql`
  mutation DeleteUserProfileMutation($id: String!) {
    deleteUserProfile(id: $id) {
      id
    }
  }
`

interface Props {
  userProfile: NonNullable<FindUserProfileById['userProfile']>
}

const UserProfile = ({ userProfile }: Props) => {
  const [deleteUserProfile] = useMutation(DELETE_USER_PROFILE_MUTATION, {
    onCompleted: () => {
      toast.success('UserProfile deleted')
      navigate(routes.userProfiles())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteUserProfileMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userProfile ' + id + '?')) {
      deleteUserProfile({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            UserProfile {userProfile.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{userProfile.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(userProfile.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(userProfile.updatedAt)}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{userProfile.email}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{userProfile.name}</td>
            </tr>
            <tr>
              <th>About me</th>
              <td>{userProfile.about_me}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{userProfile.image_url}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{userProfile.country}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{userProfile.city}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{userProfile.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUserProfile({ id: userProfile.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(userProfile.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default UserProfile
