export const schema = gql`
  type ProgrammingLanguage {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    color: String!
    frameworks: [Framework]!
    Project: Project
    projectId: Int
  }

  type Query {
    programmingLanguages: [ProgrammingLanguage!]! @requireAuth
    programmingLanguage(id: Int!): ProgrammingLanguage @requireAuth
  }

  input CreateProgrammingLanguageInput {
    name: String!
    color: String!
    projectId: Int
  }

  input UpdateProgrammingLanguageInput {
    name: String
    color: String
    projectId: Int
  }

  type Mutation {
    createProgrammingLanguage(
      input: CreateProgrammingLanguageInput!
    ): ProgrammingLanguage! @requireAuth
    updateProgrammingLanguage(
      id: Int!
      input: UpdateProgrammingLanguageInput!
    ): ProgrammingLanguage! @requireAuth
    deleteProgrammingLanguage(id: Int!): ProgrammingLanguage! @requireAuth
  }
`
