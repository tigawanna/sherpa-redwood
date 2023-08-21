import type {
  QueryResolvers,
  MutationResolvers,
  JobAppliedToRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const jobAppliedTos: QueryResolvers['jobAppliedTos'] = () => {
  return db.jobAppliedTo.findMany()
}

export const jobAppliedTo: QueryResolvers['jobAppliedTo'] = ({ id }) => {
  return db.jobAppliedTo.findUnique({
    where: { id },
  })
}

export const createJobAppliedTo: MutationResolvers['createJobAppliedTo'] = ({
  input,
}) => {
  return db.jobAppliedTo.create({
    data: input,
  })
}

export const updateJobAppliedTo: MutationResolvers['updateJobAppliedTo'] = ({
  id,
  input,
}) => {
  return db.jobAppliedTo.update({
    data: input,
    where: { id },
  })
}

export const deleteJobAppliedTo: MutationResolvers['deleteJobAppliedTo'] = ({
  id,
}) => {
  return db.jobAppliedTo.delete({
    where: { id },
  })
}

export const JobAppliedTo: JobAppliedToRelationResolvers = {
  UserProfile: (_obj, { root }) => {
    return db.jobAppliedTo.findUnique({ where: { id: root?.id } }).UserProfile()
  },
}
