export const schema = gql`
  type JobAppliedTo {
    id: Int!
    title: String!
    description: String
    company: String
    location: String
    url: String
    createdAt: DateTime!
    updatedAt: DateTime!
    resume: Resume!
    resumeId: Int!
    UserProfile: UserProfile
    userProfileId: Int
  }

  type Query {
    jobAppliedTos: [JobAppliedTo!]! @requireAuth
    jobAppliedTo(id: Int!): JobAppliedTo @requireAuth
  }

  input CreateJobAppliedToInput {
    title: String!
    description: String
    company: String
    location: String
    url: String
    resumeId: Int!
    userProfileId: Int
  }

  input UpdateJobAppliedToInput {
    title: String
    description: String
    company: String
    location: String
    url: String
    resumeId: Int
    userProfileId: Int
  }

  type Mutation {
    createJobAppliedTo(input: CreateJobAppliedToInput!): JobAppliedTo!
      @requireAuth
    updateJobAppliedTo(
      id: Int!
      input: UpdateJobAppliedToInput!
    ): JobAppliedTo! @requireAuth
    deleteJobAppliedTo(id: Int!): JobAppliedTo! @requireAuth
  }
`
