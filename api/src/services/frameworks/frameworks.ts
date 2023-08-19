import type {
  QueryResolvers,
  MutationResolvers,
  FrameworkRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const frameworks: QueryResolvers['frameworks'] = () => {
  return db.framework.findMany()
}

export const framework: QueryResolvers['framework'] = ({ id }) => {
  return db.framework.findUnique({
    where: { id },
  })
}

export const createFramework: MutationResolvers['createFramework'] = ({
  input,
}) => {
  return db.framework.create({
    data: input,
  })
}

export const updateFramework: MutationResolvers['updateFramework'] = ({
  id,
  input,
}) => {
  return db.framework.update({
    data: input,
    where: { id },
  })
}

export const deleteFramework: MutationResolvers['deleteFramework'] = ({
  id,
}) => {
  return db.framework.delete({
    where: { id },
  })
}

export const Framework: FrameworkRelationResolvers = {
  ProgrammingLanguages: (_obj, { root }) => {
    return db.framework
      .findUnique({ where: { id: root?.id } })
      .ProgrammingLanguages()
  },
}
