export const schema = gql`
  type UserProfile {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    name: String!
    about_me: String!
    image_url: String!
    country: String!
    city: String!
    phone: String!
    Project: [Project]!
    Education: [Education]!
    JobExperience: [Experience]!
    JobAppliedTo: [JobAppliedTo]!
    Skill: [Skill]!
  }

  type Query {
    userProfiles: [UserProfile!]! @requireAuth
    userProfile(id: String!): UserProfile @requireAuth
  }

  input CreateUserProfileInput {
    email: String!
    name: String!
    about_me: String!
    image_url: String!
    country: String!
    city: String!
    phone: String!
  }

  input UpdateUserProfileInput {
    email: String
    name: String
    about_me: String
    image_url: String
    country: String
    city: String
    phone: String
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(
      id: String!
      input: UpdateUserProfileInput!
    ): UserProfile! @requireAuth
    deleteUserProfile(id: String!): UserProfile! @requireAuth
  }
`
