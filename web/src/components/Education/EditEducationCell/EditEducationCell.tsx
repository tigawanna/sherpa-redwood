import type { EditEducationById, UpdateEducationInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EducationForm from 'src/components/Education/EducationForm'

export const QUERY = gql`
  query EditEducationById($id: Int!) {
    education: education(id: $id) {
      id
      createdAt
      updatedAt
      institute
      level
      years
      userProfileId
    }
  }
`
const UPDATE_EDUCATION_MUTATION = gql`
  mutation UpdateEducationMutation($id: Int!, $input: UpdateEducationInput!) {
    updateEducation(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      institute
      level
      years
      userProfileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ education }: CellSuccessProps<EditEducationById>) => {
  const [updateEducation, { loading, error }] = useMutation(
    UPDATE_EDUCATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Education updated')
        navigate(routes.educations())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateEducationInput,
    id: EditEducationById['education']['id']
  ) => {
    updateEducation({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Education {education?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EducationForm
          education={education}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
