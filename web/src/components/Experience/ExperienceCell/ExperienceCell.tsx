import type { FindExperienceById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Experience from 'src/components/Experience/Experience'

export const QUERY = gql`
  query FindExperienceById($id: Int!) {
    experience: experience(id: $id) {
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

export const Empty = () => <div>Experience not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  experience,
}: CellSuccessProps<FindExperienceById>) => {
  return <Experience experience={experience} />
}
