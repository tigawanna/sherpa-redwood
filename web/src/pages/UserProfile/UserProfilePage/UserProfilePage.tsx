import UserProfileCell from 'src/components/UserProfile/UserProfileCell'

type UserProfilePageProps = {
  id: number
}

const UserProfilePage = ({ id }: UserProfilePageProps) => {
  return <UserProfileCell id={id} />
}

export default UserProfilePage
