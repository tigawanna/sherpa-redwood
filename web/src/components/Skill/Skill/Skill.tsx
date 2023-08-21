import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type { DeleteSkillMutationVariables, FindSkillById } from 'types/graphql'

const DELETE_SKILL_MUTATION = gql`
  mutation DeleteSkillMutation($id: Int!) {
    deleteSkill(id: $id) {
      id
    }
  }
`

interface Props {
  skill: NonNullable<FindSkillById['skill']>
}

const Skill = ({ skill }: Props) => {
  const [deleteSkill] = useMutation(DELETE_SKILL_MUTATION, {
    onCompleted: () => {
      toast.success('Skill deleted')
      navigate(routes.skills())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteSkillMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete skill ' + id + '?')) {
      deleteSkill({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Skill {skill.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{skill.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(skill.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(skill.updatedAt)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{skill.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{skill.description}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{skill.url}</td>
            </tr>
            <tr>
              <th>User profile id</th>
              <td>{skill.userProfileId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSkill({ id: skill.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(skill.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Skill
