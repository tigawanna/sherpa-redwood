import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/JobAppliedTo/JobAppliedTosCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteJobAppliedToMutationVariables,
  FindJobAppliedTos,
} from 'types/graphql'

const DELETE_JOB_APPLIED_TO_MUTATION = gql`
  mutation DeleteJobAppliedToMutation($id: Int!) {
    deleteJobAppliedTo(id: $id) {
      id
    }
  }
`

const JobAppliedTosList = ({ jobAppliedTos }: FindJobAppliedTos) => {
  const [deleteJobAppliedTo] = useMutation(DELETE_JOB_APPLIED_TO_MUTATION, {
    onCompleted: () => {
      toast.success('JobAppliedTo deleted')
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

  const onDeleteClick = (id: DeleteJobAppliedToMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete jobAppliedTo ' + id + '?')) {
      deleteJobAppliedTo({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Company</th>
            <th>Location</th>
            <th>Url</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>User profile id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {jobAppliedTos.map((jobAppliedTo) => (
            <tr key={jobAppliedTo.id}>
              <td>{truncate(jobAppliedTo.id)}</td>
              <td>{truncate(jobAppliedTo.title)}</td>
              <td>{truncate(jobAppliedTo.description)}</td>
              <td>{truncate(jobAppliedTo.company)}</td>
              <td>{truncate(jobAppliedTo.location)}</td>
              <td>{truncate(jobAppliedTo.url)}</td>
              <td>{timeTag(jobAppliedTo.createdAt)}</td>
              <td>{timeTag(jobAppliedTo.updatedAt)}</td>
              <td>{truncate(jobAppliedTo.userProfileId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.jobAppliedTo({ id: jobAppliedTo.id })}
                    title={'Show jobAppliedTo ' + jobAppliedTo.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editJobAppliedTo({ id: jobAppliedTo.id })}
                    title={'Edit jobAppliedTo ' + jobAppliedTo.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete jobAppliedTo ' + jobAppliedTo.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(jobAppliedTo.id)}
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

export default JobAppliedTosList
