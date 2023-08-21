import EditEducationCell from 'src/components/Education/EditEducationCell'

type EducationPageProps = {
  id: number
}

const EditEducationPage = ({ id }: EducationPageProps) => {
  return <EditEducationCell id={id} />
}

export default EditEducationPage
