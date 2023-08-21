import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProgrammingLanguageForm from 'src/components/ProgrammingLanguage/ProgrammingLanguageForm'

import type { CreateProgrammingLanguageInput } from 'types/graphql'

const CREATE_PROGRAMMING_LANGUAGE_MUTATION = gql`
  mutation CreateProgrammingLanguageMutation(
    $input: CreateProgrammingLanguageInput!
  ) {
    createProgrammingLanguage(input: $input) {
      id
    }
  }
`

const NewProgrammingLanguage = () => {
  const [createProgrammingLanguage, { loading, error }] = useMutation(
    CREATE_PROGRAMMING_LANGUAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgrammingLanguage created')
        navigate(routes.programmingLanguages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateProgrammingLanguageInput) => {
    createProgrammingLanguage({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New ProgrammingLanguage
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProgrammingLanguageForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewProgrammingLanguage
