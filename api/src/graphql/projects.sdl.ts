export const schema = gql`
  type Project {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String!
    repoUrl: String!
    Resume: Resume
    resumeId: Int
  }

  type Query {
    projects: [Project!]! @requireAuth
    project(id: Int!): Project @requireAuth
  }

  input CreateProjectInput {
    name: String!
    description: String!
    repoUrl: String!
    resumeId: Int
  }

  input UpdateProjectInput {
    name: String
    description: String
    repoUrl: String
    resumeId: Int
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project! @requireAuth
    updateProject(id: Int!, input: UpdateProjectInput!): Project! @requireAuth
    deleteProject(id: Int!): Project! @requireAuth
  }
`
