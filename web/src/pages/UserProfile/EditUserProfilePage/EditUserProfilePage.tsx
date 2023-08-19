import EditUserProfileCell from 'src/components/UserProfile/EditUserProfileCell'

type UserProfilePageProps = {
  id: number
}

const EditUserProfilePage = ({ id }: UserProfilePageProps) => {
  return <EditUserProfileCell id={id} />
}

export default EditUserProfilePage
