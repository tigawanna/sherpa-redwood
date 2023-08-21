export const schema = gql`
  type Experience {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    description: String!
    company: String
    location: String
    url: String
    years: Int!
    UserProfile: UserProfile
    userProfileId: String
  }

  type Query {
    experiences: [Experience!]! @requireAuth
    experience(id: Int!): Experience @requireAuth
  }

  input CreateExperienceInput {
    title: String!
    description: String!
    company: String
    location: String
    url: String
    years: Int!
    userProfileId: String
  }

  input UpdateExperienceInput {
    title: String
    description: String
    company: String
    location: String
    url: String
    years: Int
    userProfileId: String
  }

  type Mutation {
    createExperience(input: CreateExperienceInput!): Experience! @requireAuth
    updateExperience(id: Int!, input: UpdateExperienceInput!): Experience!
      @requireAuth
    deleteExperience(id: Int!): Experience! @requireAuth
  }
`
