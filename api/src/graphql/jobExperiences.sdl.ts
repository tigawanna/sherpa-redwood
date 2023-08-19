export const schema = gql`
  type JobExperience {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    description: String!
    company: String
    location: String
    url: String
    years: Int!
    Resume: Resume
    resumeId: Int
  }

  type Query {
    jobExperiences: [JobExperience!]! @requireAuth
    jobExperience(id: Int!): JobExperience @requireAuth
  }

  input CreateJobExperienceInput {
    title: String!
    description: String!
    company: String
    location: String
    url: String
    years: Int!
    resumeId: Int
  }

  input UpdateJobExperienceInput {
    title: String
    description: String
    company: String
    location: String
    url: String
    years: Int
    resumeId: Int
  }

  type Mutation {
    createJobExperience(input: CreateJobExperienceInput!): JobExperience!
      @requireAuth
    updateJobExperience(
      id: Int!
      input: UpdateJobExperienceInput!
    ): JobExperience! @requireAuth
    deleteJobExperience(id: Int!): JobExperience! @requireAuth
  }
`
