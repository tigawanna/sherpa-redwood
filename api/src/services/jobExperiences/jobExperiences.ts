import type {
  QueryResolvers,
  MutationResolvers,
  JobExperienceRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const jobExperiences: QueryResolvers['jobExperiences'] = () => {
  return db.jobExperience.findMany()
}

export const jobExperience: QueryResolvers['jobExperience'] = ({ id }) => {
  return db.jobExperience.findUnique({
    where: { id },
  })
}

export const createJobExperience: MutationResolvers['createJobExperience'] = ({
  input,
}) => {
  return db.jobExperience.create({
    data: input,
  })
}

export const updateJobExperience: MutationResolvers['updateJobExperience'] = ({
  id,
  input,
}) => {
  return db.jobExperience.update({
    data: input,
    where: { id },
  })
}

export const deleteJobExperience: MutationResolvers['deleteJobExperience'] = ({
  id,
}) => {
  return db.jobExperience.delete({
    where: { id },
  })
}

export const JobExperience: JobExperienceRelationResolvers = {
  Resume: (_obj, { root }) => {
    return db.jobExperience.findUnique({ where: { id: root?.id } }).Resume()
  },
}
