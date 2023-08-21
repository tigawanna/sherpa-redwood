import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProgrammingLanguage/ProgrammingLanguagesCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteProgrammingLanguageMutationVariables,
  FindProgrammingLanguages,
} from 'types/graphql'

const DELETE_PROGRAMMING_LANGUAGE_MUTATION = gql`
  mutation DeleteProgrammingLanguageMutation($id: Int!) {
    deleteProgrammingLanguage(id: $id) {
      id
    }
  }
`

const ProgrammingLanguagesList = ({
  programmingLanguages,
}: FindProgrammingLanguages) => {
  const [deleteProgrammingLanguage] = useMutation(
    DELETE_PROGRAMMING_LANGUAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgrammingLanguage deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Name</th>
            <th>Color</th>
            <th>Project id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {programmingLanguages.map((programmingLanguage) => (
            <tr key={programmingLanguage.id}>
              <td>{truncate(programmingLanguage.id)}</td>
              <td>{timeTag(programmingLanguage.createdAt)}</td>
              <td>{timeTag(programmingLanguage.updatedAt)}</td>
              <td>{truncate(programmingLanguage.name)}</td>
              <td>{truncate(programmingLanguage.color)}</td>
              <td>{truncate(programmingLanguage.projectId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.programmingLanguage({
                      id: programmingLanguage.id,
                    })}
                    title={
                      'Show programmingLanguage ' +
                      programmingLanguage.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProgrammingLanguage({
                      id: programmingLanguage.id,
                    })}
                    title={'Edit programmingLanguage ' + programmingLanguage.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={
                      'Delete programmingLanguage ' + programmingLanguage.id
                    }
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(programmingLanguage.id)}
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

export default ProgrammingLanguagesList
