import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/UserProfile/UserProfilesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteUserProfileMutationVariables,
  FindUserProfiles,
} from 'types/graphql'

const DELETE_USER_PROFILE_MUTATION = gql`
  mutation DeleteUserProfileMutation($id: String!) {
    deleteUserProfile(id: $id) {
      id
    }
  }
`

const UserProfilesList = ({ userProfiles }: FindUserProfiles) => {
  const [deleteUserProfile] = useMutation(DELETE_USER_PROFILE_MUTATION, {
    onCompleted: () => {
      toast.success('UserProfile deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteUserProfileMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete userProfile ' + id + '?')) {
      deleteUserProfile({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Email</th>
            <th>Name</th>
            <th>About me</th>
            <th>Image url</th>
            <th>Resume id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {userProfiles.map((userProfile) => (
            <tr key={userProfile.id}>
              <td>{truncate(userProfile.id)}</td>
              <td>{timeTag(userProfile.createdAt)}</td>
              <td>{timeTag(userProfile.updatedAt)}</td>
              <td>{truncate(userProfile.email)}</td>
              <td>{truncate(userProfile.name)}</td>
              <td>{truncate(userProfile.about_me)}</td>
              <td>{truncate(userProfile.image_url)}</td>
              <td>{truncate(userProfile.resumeId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.userProfile({ id: userProfile.id })}
                    title={'Show userProfile ' + userProfile.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUserProfile({ id: userProfile.id })}
                    title={'Edit userProfile ' + userProfile.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete userProfile ' + userProfile.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(userProfile.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserProfilesList
