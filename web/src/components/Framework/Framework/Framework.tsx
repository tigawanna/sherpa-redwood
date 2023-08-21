import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteFrameworkMutationVariables,
  FindFrameworkById,
} from 'types/graphql'

const DELETE_FRAMEWORK_MUTATION = gql`
  mutation DeleteFrameworkMutation($id: Int!) {
    deleteFramework(id: $id) {
      id
    }
  }
`

interface Props {
  framework: NonNullable<FindFrameworkById['framework']>
}

const Framework = ({ framework }: Props) => {
  const [deleteFramework] = useMutation(DELETE_FRAMEWORK_MUTATION, {
    onCompleted: () => {
      toast.success('Framework deleted')
      navigate(routes.frameworks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteFrameworkMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete framework ' + id + '?')) {
      deleteFramework({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Framework {framework.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{framework.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(framework.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(framework.updatedAt)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{framework.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{framework.description}</td>
            </tr>
            <tr>
              <th>Github url</th>
              <td>{framework.githubUrl}</td>
            </tr>
            <tr>
              <th>Programming languages id</th>
              <td>{framework.programmingLanguagesId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFramework({ id: framework.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(framework.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Framework
