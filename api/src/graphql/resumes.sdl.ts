export const schema = gql`
  type Resume {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    location: String!
    contactEmail: String!
    contactPhone: String!
    summary: String!
    programmingLanguages: [ProgrammingLanguage]!
    skills: [Skill]!
    experience: [JobExperience]!
    education: [Education]!
    projects: [Project]!
    JobAppliedTo: [JobAppliedTo]!
    UserProfile: [UserProfile]!
  }

  type Query {
    resumes: [Resume!]! @requireAuth
    resume(id: Int!): Resume @requireAuth
  }

  input CreateResumeInput {
    name: String!
    location: String!
    contactEmail: String!
    contactPhone: String!
    summary: String!
  }

  input UpdateResumeInput {
    name: String
    location: String
    contactEmail: String
    contactPhone: String
    summary: String
  }

  type Mutation {
    createResume(input: CreateResumeInput!): Resume! @requireAuth
    updateResume(id: Int!, input: UpdateResumeInput!): Resume! @requireAuth
    deleteResume(id: Int!): Resume! @requireAuth
  }
`
