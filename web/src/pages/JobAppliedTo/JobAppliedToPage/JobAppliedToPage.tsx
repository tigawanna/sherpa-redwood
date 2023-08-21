import JobAppliedToCell from 'src/components/JobAppliedTo/JobAppliedToCell'

type JobAppliedToPageProps = {
  id: number
}

const JobAppliedToPage = ({ id }: JobAppliedToPageProps) => {
  return <JobAppliedToCell id={id} />
}

export default JobAppliedToPage
