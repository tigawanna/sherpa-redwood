import type { FindEducations } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Educations from 'src/components/Education/Educations'

export const QUERY = gql`
  query FindEducations {
    educations {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No educations yet. '}
      <Link to={routes.newEducation()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ educations }: CellSuccessProps<FindEducations>) => {
  return <Educations educations={educations} />
}
