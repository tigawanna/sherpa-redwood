import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Framework/FrameworksCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteFrameworkMutationVariables,
  FindFrameworks,
} from 'types/graphql'

const DELETE_FRAMEWORK_MUTATION = gql`
  mutation DeleteFrameworkMutation($id: Int!) {
    deleteFramework(id: $id) {
      id
    }
  }
`

const FrameworksList = ({ frameworks }: FindFrameworks) => {
  const [deleteFramework] = useMutation(DELETE_FRAMEWORK_MUTATION, {
    onCompleted: () => {
      toast.success('Framework deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteFrameworkMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete framework ' + id + '?')) {
      deleteFramework({ variables: { id } })
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
            <th>Description</th>
            <th>Github url</th>
            <th>Programming languages id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {frameworks.map((framework) => (
            <tr key={framework.id}>
              <td>{truncate(framework.id)}</td>
              <td>{timeTag(framework.createdAt)}</td>
              <td>{timeTag(framework.updatedAt)}</td>
              <td>{truncate(framework.name)}</td>
              <td>{truncate(framework.description)}</td>
              <td>{truncate(framework.githubUrl)}</td>
              <td>{truncate(framework.programmingLanguagesId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.framework({ id: framework.id })}
                    title={'Show framework ' + framework.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFramework({ id: framework.id })}
                    title={'Edit framework ' + framework.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete framework ' + framework.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(framework.id)}
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

export default FrameworksList
