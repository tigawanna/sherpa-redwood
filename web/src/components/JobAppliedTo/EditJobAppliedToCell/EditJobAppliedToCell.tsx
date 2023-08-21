import type {
  EditJobAppliedToById,
  UpdateJobAppliedToInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import JobAppliedToForm from 'src/components/JobAppliedTo/JobAppliedToForm'

export const QUERY = gql`
  query EditJobAppliedToById($id: Int!) {
    jobAppliedTo: jobAppliedTo(id: $id) {
      id
      title
      description
      company
      location
      url
      createdAt
      updatedAt
      userProfileId
    }
  }
`
const UPDATE_JOB_APPLIED_TO_MUTATION = gql`
  mutation UpdateJobAppliedToMutation(
    $id: Int!
    $input: UpdateJobAppliedToInput!
  ) {
    updateJobAppliedTo(id: $id, input: $input) {
      id
      title
      description
      company
      location
      url
      createdAt
      updatedAt
      userProfileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  jobAppliedTo,
}: CellSuccessProps<EditJobAppliedToById>) => {
  const [updateJobAppliedTo, { loading, error }] = useMutation(
    UPDATE_JOB_APPLIED_TO_MUTATION,
    {
      onCompleted: () => {
        toast.success('JobAppliedTo updated')
        navigate(routes.jobAppliedTos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateJobAppliedToInput,
    id: EditJobAppliedToById['jobAppliedTo']['id']
  ) => {
    updateJobAppliedTo({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit JobAppliedTo {jobAppliedTo?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <JobAppliedToForm
          jobAppliedTo={jobAppliedTo}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
