import type { FindFrameworkById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Framework from 'src/components/Framework/Framework'

export const QUERY = gql`
  query FindFrameworkById($id: Int!) {
    framework: framework(id: $id) {
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

export const Empty = () => <div>Framework not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ framework }: CellSuccessProps<FindFrameworkById>) => {
  return <Framework framework={framework} />
}
