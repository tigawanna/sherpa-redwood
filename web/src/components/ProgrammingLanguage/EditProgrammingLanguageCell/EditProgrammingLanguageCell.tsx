import type {
  EditProgrammingLanguageById,
  UpdateProgrammingLanguageInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProgrammingLanguageForm from 'src/components/ProgrammingLanguage/ProgrammingLanguageForm'

export const QUERY = gql`
  query EditProgrammingLanguageById($id: Int!) {
    programmingLanguage: programmingLanguage(id: $id) {
      id
      createdAt
      updatedAt
      name
      color
      projectId
    }
  }
`
const UPDATE_PROGRAMMING_LANGUAGE_MUTATION = gql`
  mutation UpdateProgrammingLanguageMutation(
    $id: Int!
    $input: UpdateProgrammingLanguageInput!
  ) {
    updateProgrammingLanguage(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      name
      color
      projectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  programmingLanguage,
}: CellSuccessProps<EditProgrammingLanguageById>) => {
  const [updateProgrammingLanguage, { loading, error }] = useMutation(
    UPDATE_PROGRAMMING_LANGUAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgrammingLanguage updated')
        navigate(routes.programmingLanguages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateProgrammingLanguageInput,
    id: EditProgrammingLanguageById['programmingLanguage']['id']
  ) => {
    updateProgrammingLanguage({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProgrammingLanguage {programmingLanguage?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProgrammingLanguageForm
          programmingLanguage={programmingLanguage}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
