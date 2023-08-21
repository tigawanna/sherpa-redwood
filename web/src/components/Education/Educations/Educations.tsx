import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Education/EducationsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteEducationMutationVariables,
  FindEducations,
} from 'types/graphql'

const DELETE_EDUCATION_MUTATION = gql`
  mutation DeleteEducationMutation($id: Int!) {
    deleteEducation(id: $id) {
      id
    }
  }
`

const EducationsList = ({ educations }: FindEducations) => {
  const [deleteEducation] = useMutation(DELETE_EDUCATION_MUTATION, {
    onCompleted: () => {
      toast.success('Education deleted')
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

  const onDeleteClick = (id: DeleteEducationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete education ' + id + '?')) {
      deleteEducation({ variables: { id } })
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
            <th>Institute</th>
            <th>Level</th>
            <th>Years</th>
            <th>User profile id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {educations.map((education) => (
            <tr key={education.id}>
              <td>{truncate(education.id)}</td>
              <td>{timeTag(education.createdAt)}</td>
              <td>{timeTag(education.updatedAt)}</td>
              <td>{truncate(education.institute)}</td>
              <td>{truncate(education.level)}</td>
              <td>{truncate(education.years)}</td>
              <td>{truncate(education.userProfileId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.education({ id: education.id })}
                    title={'Show education ' + education.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEducation({ id: education.id })}
                    title={'Edit education ' + education.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete education ' + education.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(education.id)}
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

export default EducationsList
