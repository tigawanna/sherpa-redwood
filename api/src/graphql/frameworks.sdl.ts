export const schema = gql`
  type Framework {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String!
    githubUrl: String
    ProgrammingLanguages: ProgrammingLanguage
    programmingLanguagesId: Int
  }

  type Query {
    frameworks: [Framework!]! @requireAuth
    framework(id: Int!): Framework @requireAuth
  }

  input CreateFrameworkInput {
    name: String!
    description: String!
    githubUrl: String
    programmingLanguagesId: Int
  }

  input UpdateFrameworkInput {
    name: String
    description: String
    githubUrl: String
    programmingLanguagesId: Int
  }

  type Mutation {
    createFramework(input: CreateFrameworkInput!): Framework! @requireAuth
    updateFramework(id: Int!, input: UpdateFrameworkInput!): Framework!
      @requireAuth
    deleteFramework(id: Int!): Framework! @requireAuth
  }
`
