import EditFrameworkCell from 'src/components/Framework/EditFrameworkCell'

type FrameworkPageProps = {
  id: number
}

const EditFrameworkPage = ({ id }: FrameworkPageProps) => {
  return <EditFrameworkCell id={id} />
}

export default EditFrameworkPage
