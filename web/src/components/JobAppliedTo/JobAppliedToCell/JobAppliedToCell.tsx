import type { FindJobAppliedToById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import JobAppliedTo from 'src/components/JobAppliedTo/JobAppliedTo'

export const QUERY = gql`
  query FindJobAppliedToById($id: Int!) {
    jobAppliedTo: jobAppliedTo(id: $id) {
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

export const Empty = () => <div>JobAppliedTo not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  jobAppliedTo,
}: CellSuccessProps<FindJobAppliedToById>) => {
  return <JobAppliedTo jobAppliedTo={jobAppliedTo} />
}
