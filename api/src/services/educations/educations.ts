import type {
  QueryResolvers,
  MutationResolvers,
  EducationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const educations: QueryResolvers['educations'] = () => {
  return db.education.findMany()
}

export const education: QueryResolvers['education'] = ({ id }) => {
  return db.education.findUnique({
    where: { id },
  })
}

export const createEducation: MutationResolvers['createEducation'] = ({
  input,
}) => {
  return db.education.create({
    data: input,
  })
}

export const updateEducation: MutationResolvers['updateEducation'] = ({
  id,
  input,
}) => {
  return db.education.update({
    data: input,
    where: { id },
  })
}

export const deleteEducation: MutationResolvers['deleteEducation'] = ({
  id,
}) => {
  return db.education.delete({
    where: { id },
  })
}

export const Education: EducationRelationResolvers = {
  Resume: (_obj, { root }) => {
    return db.education.findUnique({ where: { id: root?.id } }).Resume()
  },
}
