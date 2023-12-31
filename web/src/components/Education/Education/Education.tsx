import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteEducationMutationVariables,
  FindEducationById,
} from 'types/graphql'

const DELETE_EDUCATION_MUTATION = gql`
  mutation DeleteEducationMutation($id: Int!) {
    deleteEducation(id: $id) {
      id
    }
  }
`

interface Props {
  education: NonNullable<FindEducationById['education']>
}

const Education = ({ education }: Props) => {
  const [deleteEducation] = useMutation(DELETE_EDUCATION_MUTATION, {
    onCompleted: () => {
      toast.success('Education deleted')
      navigate(routes.educations())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteEducationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete education ' + id + '?')) {
      deleteEducation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Education {education.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{education.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(education.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(education.updatedAt)}</td>
            </tr>
            <tr>
              <th>Institute</th>
              <td>{education.institute}</td>
            </tr>
            <tr>
              <th>Level</th>
              <td>{education.level}</td>
            </tr>
            <tr>
              <th>Years</th>
              <td>{education.years}</td>
            </tr>
            <tr>
              <th>User profile id</th>
              <td>{education.userProfileId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEducation({ id: education.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(education.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Education
