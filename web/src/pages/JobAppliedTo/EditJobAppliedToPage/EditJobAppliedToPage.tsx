import EditJobAppliedToCell from 'src/components/JobAppliedTo/EditJobAppliedToCell'

type JobAppliedToPageProps = {
  id: number
}

const EditJobAppliedToPage = ({ id }: JobAppliedToPageProps) => {
  return <EditJobAppliedToCell id={id} />
}

export default EditJobAppliedToPage
