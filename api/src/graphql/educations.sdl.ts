export const schema = gql`
  type Education {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    institute: String!
    level: String!
    years: Int!
    UserProfile: UserProfile
    userProfileId: String
  }

  type Query {
    educations: [Education!]! @requireAuth
    education(id: Int!): Education @requireAuth
  }

  input CreateEducationInput {
    institute: String!
    level: String!
    years: Int!
    userProfileId: String
  }

  input UpdateEducationInput {
    institute: String
    level: String
    years: Int
    userProfileId: String
  }

  type Mutation {
    createEducation(input: CreateEducationInput!): Education! @requireAuth
    updateEducation(id: Int!, input: UpdateEducationInput!): Education!
      @requireAuth
    deleteEducation(id: Int!): Education! @requireAuth
  }
`
