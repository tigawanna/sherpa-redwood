import type {
  QueryResolvers,
  MutationResolvers,
  ExperienceRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const experiences: QueryResolvers['experiences'] = () => {
  return db.experience.findMany()
}

export const experience: QueryResolvers['experience'] = ({ id }) => {
  return db.experience.findUnique({
    where: { id },
  })
}

export const createExperience: MutationResolvers['createExperience'] = ({
  input,
}) => {
  return db.experience.create({
    data: input,
  })
}

export const updateExperience: MutationResolvers['updateExperience'] = ({
  id,
  input,
}) => {
  return db.experience.update({
    data: input,
    where: { id },
  })
}

export const deleteExperience: MutationResolvers['deleteExperience'] = ({
  id,
}) => {
  return db.experience.delete({
    where: { id },
  })
}

export const Experience: ExperienceRelationResolvers = {
  UserProfile: (_obj, { root }) => {
    return db.experience.findUnique({ where: { id: root?.id } }).UserProfile()
  },
}
