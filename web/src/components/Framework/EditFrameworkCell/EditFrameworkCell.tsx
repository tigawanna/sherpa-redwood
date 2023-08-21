import type { EditFrameworkById, UpdateFrameworkInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FrameworkForm from 'src/components/Framework/FrameworkForm'

export const QUERY = gql`
  query EditFrameworkById($id: Int!) {
    framework: framework(id: $id) {
      id
      createdAt
      updatedAt
      name
      description
      githubUrl
      programmingLanguagesId
    }
  }
`
const UPDATE_FRAMEWORK_MUTATION = gql`
  mutation UpdateFrameworkMutation($id: Int!, $input: UpdateFrameworkInput!) {
    updateFramework(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      name
      description
      githubUrl
      programmingLanguagesId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ framework }: CellSuccessProps<EditFrameworkById>) => {
  const [updateFramework, { loading, error }] = useMutation(
    UPDATE_FRAMEWORK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Framework updated')
        navigate(routes.frameworks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateFrameworkInput,
    id: EditFrameworkById['framework']['id']
  ) => {
    updateFramework({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Framework {framework?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FrameworkForm
          framework={framework}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
