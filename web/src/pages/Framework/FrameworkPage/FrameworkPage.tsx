import FrameworkCell from 'src/components/Framework/FrameworkCell'

type FrameworkPageProps = {
  id: number
}

const FrameworkPage = ({ id }: FrameworkPageProps) => {
  return <FrameworkCell id={id} />
}

export default FrameworkPage
