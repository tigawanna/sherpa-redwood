import EditProgrammingLanguageCell from 'src/components/ProgrammingLanguage/EditProgrammingLanguageCell'

type ProgrammingLanguagePageProps = {
  id: number
}

const EditProgrammingLanguagePage = ({ id }: ProgrammingLanguagePageProps) => {
  return <EditProgrammingLanguageCell id={id} />
}

export default EditProgrammingLanguagePage
