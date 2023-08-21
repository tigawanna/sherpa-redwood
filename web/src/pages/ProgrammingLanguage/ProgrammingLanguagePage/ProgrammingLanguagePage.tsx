import ProgrammingLanguageCell from 'src/components/ProgrammingLanguage/ProgrammingLanguageCell'

type ProgrammingLanguagePageProps = {
  id: number
}

const ProgrammingLanguagePage = ({ id }: ProgrammingLanguagePageProps) => {
  return <ProgrammingLanguageCell id={id} />
}

export default ProgrammingLanguagePage
