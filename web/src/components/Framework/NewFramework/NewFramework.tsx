import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FrameworkForm from 'src/components/Framework/FrameworkForm'

import type { CreateFrameworkInput } from 'types/graphql'

const CREATE_FRAMEWORK_MUTATION = gql`
  mutation CreateFrameworkMutation($input: CreateFrameworkInput!) {
    createFramework(input: $input) {
      id
    }
  }
`

const NewFramework = () => {
  const [createFramework, { loading, error }] = useMutation(
    CREATE_FRAMEWORK_MUTATION,
    {
      onCompleted: () => {
        toast.success('Framework created')
        navigate(routes.frameworks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateFrameworkInput) => {
    createFramework({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Framework</h2>
      </header>
      <div className="rw-segment-main">
        <FrameworkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFramework
