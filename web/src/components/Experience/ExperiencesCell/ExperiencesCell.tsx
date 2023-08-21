import type { FindExperiences } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Experiences from 'src/components/Experience/Experiences'

export const QUERY = gql`
  query FindExperiences {
    experiences {
      id
      createdAt
      updatedAt
      title
      description
      company
      location
      url
      years
      userProfileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No experiences yet. '}
      <Link to={routes.newExperience()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ experiences }: CellSuccessProps<FindExperiences>) => {
  return <Experiences experiences={experiences} />
}
