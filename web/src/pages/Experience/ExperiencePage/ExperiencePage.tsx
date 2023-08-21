import ExperienceCell from 'src/components/Experience/ExperienceCell'

type ExperiencePageProps = {
  id: number
}

const ExperiencePage = ({ id }: ExperiencePageProps) => {
  return <ExperienceCell id={id} />
}

export default ExperiencePage
