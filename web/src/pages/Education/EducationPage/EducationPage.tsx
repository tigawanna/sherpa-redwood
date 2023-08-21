import EducationCell from 'src/components/Education/EducationCell'

type EducationPageProps = {
  id: number
}

const EducationPage = ({ id }: EducationPageProps) => {
  return <EducationCell id={id} />
}

export default EducationPage
