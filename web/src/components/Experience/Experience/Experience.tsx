import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteExperienceMutationVariables,
  FindExperienceById,
} from 'types/graphql'

const DELETE_EXPERIENCE_MUTATION = gql`
  mutation DeleteExperienceMutation($id: Int!) {
    deleteExperience(id: $id) {
      id
    }
  }
`

interface Props {
  experience: NonNullable<FindExperienceById['experience']>
}

const Experience = ({ experience }: Props) => {
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE_MUTATION, {
    onCompleted: () => {
      toast.success('Experience deleted')
      navigate(routes.experiences())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteExperienceMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete experience ' + id + '?')) {
      deleteExperience({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Experience {experience.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{experience.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(experience.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(experience.updatedAt)}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{experience.title}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{experience.description}</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>{experience.company}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{experience.location}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{experience.url}</td>
            </tr>
            <tr>
              <th>Years</th>
              <td>{experience.years}</td>
            </tr>
            <tr>
              <th>User profile id</th>
              <td>{experience.userProfileId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editExperience({ id: experience.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(experience.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Experience
