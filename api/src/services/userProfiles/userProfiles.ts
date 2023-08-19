import type {
  QueryResolvers,
  MutationResolvers,
  UserProfileRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userProfiles: QueryResolvers['userProfiles'] = () => {
  return db.userProfile.findMany()
}

export const userProfile: QueryResolvers['userProfile'] = ({ id }) => {
  return db.userProfile.findUnique({
    where: { id },
  })
}

export const createUserProfile: MutationResolvers['createUserProfile'] = ({
  input,
}) => {
  return db.userProfile.create({
    data: input,
  })
}

export const updateUserProfile: MutationResolvers['updateUserProfile'] = ({
  id,
  input,
}) => {
  return db.userProfile.update({
    data: input,
    where: { id },
  })
}

export const deleteUserProfile: MutationResolvers['deleteUserProfile'] = ({
  id,
}) => {
  return db.userProfile.delete({
    where: { id },
  })
}

export const UserProfile: UserProfileRelationResolvers = {
  JobAppliedTo: (_obj, { root }) => {
    return db.userProfile.findUnique({ where: { id: root?.id } }).JobAppliedTo()
  },
  resume: (_obj, { root }) => {
    return db.userProfile.findUnique({ where: { id: root?.id } }).resume()
  },
}
