import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import JobAppliedToForm from 'src/components/JobAppliedTo/JobAppliedToForm'

import type { CreateJobAppliedToInput } from 'types/graphql'

const CREATE_JOB_APPLIED_TO_MUTATION = gql`
  mutation CreateJobAppliedToMutation($input: CreateJobAppliedToInput!) {
    createJobAppliedTo(input: $input) {
      id
    }
  }
`

const NewJobAppliedTo = () => {
  const [createJobAppliedTo, { loading, error }] = useMutation(
    CREATE_JOB_APPLIED_TO_MUTATION,
    {
      onCompleted: () => {
        toast.success('JobAppliedTo created')
        navigate(routes.jobAppliedTos())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateJobAppliedToInput) => {
    createJobAppliedTo({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New JobAppliedTo</h2>
      </header>
      <div className="rw-segment-main">
        <JobAppliedToForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewJobAppliedTo
