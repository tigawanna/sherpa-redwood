export const schema = gql`
  type Project {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String!
    repoUrl: String!
    UserProfile: UserProfile
    userProfileId: String
    programmingLanguages: [ProgrammingLanguage]!
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    name: String!
    description: String!
    repoUrl: String!
    userProfileId: String
  }

  input UpdateProjectInput {
    name: String
    description: String
    repoUrl: String
    userProfileId: String
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
