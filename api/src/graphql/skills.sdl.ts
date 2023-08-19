export const schema = gql`
  type Skill {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String!
    url: String!
    Resume: Resume
    resumeId: Int
  }

  type Query {
    skills: [Skill!]! @requireAuth
    skill(id: Int!): Skill @requireAuth
  }

  input CreateSkillInput {
    name: String!
    description: String!
    url: String!
    resumeId: Int
  }

  input UpdateSkillInput {
    name: String
    description: String
    url: String
    resumeId: Int
  }

  type Mutation {
    createSkill(input: CreateSkillInput!): Skill! @requireAuth
    updateSkill(id: Int!, input: UpdateSkillInput!): Skill! @requireAuth
    deleteSkill(id: Int!): Skill! @requireAuth
  }
`
