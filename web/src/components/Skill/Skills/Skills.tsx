import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Skill/SkillsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteSkillMutationVariables, FindSkills } from 'types/graphql'

const DELETE_SKILL_MUTATION = gql`
  mutation DeleteSkillMutation($id: Int!) {
    deleteSkill(id: $id) {
      id
    }
  }
`

const SkillsList = ({ skills }: FindSkills) => {
  const [deleteSkill] = useMutation(DELETE_SKILL_MUTATION, {
    onCompleted: () => {
      toast.success('Skill deleted')
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

  const onDeleteClick = (id: DeleteSkillMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete skill ' + id + '?')) {
      deleteSkill({ variables: { id } })
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
            <th>Url</th>
            <th>User profile id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.id}>
              <td>{truncate(skill.id)}</td>
              <td>{timeTag(skill.createdAt)}</td>
              <td>{timeTag(skill.updatedAt)}</td>
              <td>{truncate(skill.name)}</td>
              <td>{truncate(skill.description)}</td>
              <td>{truncate(skill.url)}</td>
              <td>{truncate(skill.userProfileId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.skill({ id: skill.id })}
                    title={'Show skill ' + skill.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSkill({ id: skill.id })}
                    title={'Edit skill ' + skill.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete skill ' + skill.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(skill.id)}
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

export default SkillsList
