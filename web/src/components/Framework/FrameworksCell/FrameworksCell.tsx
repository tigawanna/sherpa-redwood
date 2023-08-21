import type { FindFrameworks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Frameworks from 'src/components/Framework/Frameworks'

export const QUERY = gql`
  query FindFrameworks {
    frameworks {
      id
      createdAt
      updatedAt
      name
      description
      githubUrl
      programmingLanguagesId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No frameworks yet. '}
      <Link to={routes.newFramework()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ frameworks }: CellSuccessProps<FindFrameworks>) => {
  return <Frameworks frameworks={frameworks} />
}
