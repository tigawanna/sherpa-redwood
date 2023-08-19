export const schema = gql`
  type UserProfile {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    name: String!
    about_me: String!
    image_url: String!
    JobAppliedTo: [JobAppliedTo]!
    resume: Resume!
    resumeId: Int!
  }

  type Query {
    userProfiles: [UserProfile!]! @requireAuth
    userProfile(id: Int!): UserProfile @requireAuth
  }

  input CreateUserProfileInput {
    email: String!
    name: String!
    about_me: String!
    image_url: String!
    resumeId: Int!
  }

  input UpdateUserProfileInput {
    email: String
    name: String
    about_me: String
    image_url: String
    resumeId: Int
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(id: Int!, input: UpdateUserProfileInput!): UserProfile!
      @requireAuth
    deleteUserProfile(id: Int!): UserProfile! @requireAuth
  }
`
