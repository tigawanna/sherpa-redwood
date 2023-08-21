import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteProgrammingLanguageMutationVariables,
  FindProgrammingLanguageById,
} from 'types/graphql'

const DELETE_PROGRAMMING_LANGUAGE_MUTATION = gql`
  mutation DeleteProgrammingLanguageMutation($id: Int!) {
    deleteProgrammingLanguage(id: $id) {
      id
    }
  }
`

interface Props {
  programmingLanguage: NonNullable<
    FindProgrammingLanguageById['programmingLanguage']
  >
}

const ProgrammingLanguage = ({ programmingLanguage }: Props) => {
  const [deleteProgrammingLanguage] = useMutation(
    DELETE_PROGRAMMING_LANGUAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgrammingLanguage deleted')
        navigate(routes.programmingLanguages())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteProgrammingLanguageMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete programmingLanguage ' + id + '?')
    ) {
      deleteProgrammingLanguage({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProgrammingLanguage {programmingLanguage.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{programmingLanguage.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(programmingLanguage.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(programmingLanguage.updatedAt)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{programmingLanguage.name}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{programmingLanguage.color}</td>
            </tr>
            <tr>
              <th>Project id</th>
              <td>{programmingLanguage.projectId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProgrammingLanguage({ id: programmingLanguage.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(programmingLanguage.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProgrammingLanguage
