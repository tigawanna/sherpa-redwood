import type { FindJobAppliedTos } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import JobAppliedTos from 'src/components/JobAppliedTo/JobAppliedTos'

export const QUERY = gql`
  query FindJobAppliedTos {
    jobAppliedTos {
      id
      title
      description
      company
      location
      url
      createdAt
      updatedAt
      userProfileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No jobAppliedTos yet. '}
      <Link to={routes.newJobAppliedTo()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  jobAppliedTos,
}: CellSuccessProps<FindJobAppliedTos>) => {
  return <JobAppliedTos jobAppliedTos={jobAppliedTos} />
}
