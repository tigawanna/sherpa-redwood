import type { EditSkillById, UpdateSkillInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SkillForm from 'src/components/Skill/SkillForm'

export const QUERY = gql`
  query EditSkillById($id: Int!) {
    skill: skill(id: $id) {
      id
      createdAt
      updatedAt
      name
      description
      url
      userProfileId
    }
  }
`
const UPDATE_SKILL_MUTATION = gql`
  mutation UpdateSkillMutation($id: Int!, $input: UpdateSkillInput!) {
    updateSkill(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      name
      description
      url
      userProfileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ skill }: CellSuccessProps<EditSkillById>) => {
  const [updateSkill, { loading, error }] = useMutation(UPDATE_SKILL_MUTATION, {
    onCompleted: () => {
      toast.success('Skill updated')
      navigate(routes.skills())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateSkillInput,
    id: EditSkillById['skill']['id']
  ) => {
    updateSkill({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Skill {skill?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SkillForm
          skill={skill}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
