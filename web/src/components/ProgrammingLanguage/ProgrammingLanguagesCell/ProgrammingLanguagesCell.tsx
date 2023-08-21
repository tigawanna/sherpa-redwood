import type { FindProgrammingLanguages } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProgrammingLanguages from 'src/components/ProgrammingLanguage/ProgrammingLanguages'

export const QUERY = gql`
  query FindProgrammingLanguages {
    programmingLanguages {
      id
      createdAt
      updatedAt
      name
      color
      projectId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No programmingLanguages yet. '}
      <Link to={routes.newProgrammingLanguage()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  programmingLanguages,
}: CellSuccessProps<FindProgrammingLanguages>) => {
  return <ProgrammingLanguages programmingLanguages={programmingLanguages} />
}
