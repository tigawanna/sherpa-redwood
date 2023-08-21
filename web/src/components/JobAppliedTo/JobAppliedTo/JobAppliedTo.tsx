import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteJobAppliedToMutationVariables,
  FindJobAppliedToById,
} from 'types/graphql'

const DELETE_JOB_APPLIED_TO_MUTATION = gql`
  mutation DeleteJobAppliedToMutation($id: Int!) {
    deleteJobAppliedTo(id: $id) {
      id
    }
  }
`

interface Props {
  jobAppliedTo: NonNullable<FindJobAppliedToById['jobAppliedTo']>
}

const JobAppliedTo = ({ jobAppliedTo }: Props) => {
  const [deleteJobAppliedTo] = useMutation(DELETE_JOB_APPLIED_TO_MUTATION, {
    onCompleted: () => {
      toast.success('JobAppliedTo deleted')
      navigate(routes.jobAppliedTos())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteJobAppliedToMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete jobAppliedTo ' + id + '?')) {
      deleteJobAppliedTo({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            JobAppliedTo {jobAppliedTo.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{jobAppliedTo.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{jobAppliedTo.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{jobAppliedTo.description}</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>{jobAppliedTo.company}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{jobAppliedTo.location}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{jobAppliedTo.url}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(jobAppliedTo.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(jobAppliedTo.updatedAt)}</td>
            </tr>
            <tr>
              <th>User profile id</th>
              <td>{jobAppliedTo.userProfileId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editJobAppliedTo({ id: jobAppliedTo.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(jobAppliedTo.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default JobAppliedTo
