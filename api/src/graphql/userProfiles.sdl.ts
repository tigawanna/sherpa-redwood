export const schema = gql`
  type UserProfile {
    id: Int!
    email: String!
    name: String!
    about_me: String!
    image_url: String!
    createdAt: DateTime!
    updatedAt: DateTime!
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
  }

  input UpdateUserProfileInput {
    email: String
    name: String
    about_me: String
    image_url: String
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(id: Int!, input: UpdateUserProfileInput!): UserProfile!
      @requireAuth
    deleteUserProfile(id: Int!): UserProfile! @requireAuth
  }
`
