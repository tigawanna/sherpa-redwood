import EditExperienceCell from 'src/components/Experience/EditExperienceCell'

type ExperiencePageProps = {
  id: number
}

const EditExperiencePage = ({ id }: ExperiencePageProps) => {
  return <EditExperienceCell id={id} />
}

export default EditExperiencePage
