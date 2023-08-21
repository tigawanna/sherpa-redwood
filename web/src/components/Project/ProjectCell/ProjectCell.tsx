import type { FindProjectById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Project from 'src/components/Project/Project'

export const QUERY = gql`
  query FindProjectById($id: Int!) {
    project: project(id: $id) {
      id
      createdAt
      updatedAt
      name
      description
      repoUrl
      userProfileId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Project not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ project }: CellSuccessProps<FindProjectById>) => {
  return <Project project={project} />
}
