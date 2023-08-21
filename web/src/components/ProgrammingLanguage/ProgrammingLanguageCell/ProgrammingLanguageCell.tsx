import type { FindProgrammingLanguageById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ProgrammingLanguage from 'src/components/ProgrammingLanguage/ProgrammingLanguage'

export const QUERY = gql`
  query FindProgrammingLanguageById($id: Int!) {
    programmingLanguage: programmingLanguage(id: $id) {
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

export const Empty = () => <div>ProgrammingLanguage not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  programmingLanguage,
}: CellSuccessProps<FindProgrammingLanguageById>) => {
  return <ProgrammingLanguage programmingLanguage={programmingLanguage} />
}
