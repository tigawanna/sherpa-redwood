import type {
  FindUserProfileQuery,
  FindUserProfileQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUserProfileQuery($id: Int!) {
    userProfile: userProfile(id: $id) {
      id

    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserProfileQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({userProfile,}: CellSuccessProps<FindUserProfileQuery, FindUserProfileQueryVariables>) => {
  return <div>{JSON.stringify(userProfile)}</div>
}
