import type { FindEducationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Education from 'src/components/Education/Education'

export const QUERY = gql`
  query FindEducationById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Education not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ education }: CellSuccessProps<FindEducationById>) => {
  return <Education education={education} />
}
