import type {
  QueryResolvers,
  MutationResolvers,
  ProgrammingLanguageRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const programmingLanguages: QueryResolvers['programmingLanguages'] =
  () => {
    return db.programmingLanguage.findMany()
  }

export const programmingLanguage: QueryResolvers['programmingLanguage'] = ({
  id,
}) => {
  return db.programmingLanguage.findUnique({
    where: { id },
  })
}

export const createProgrammingLanguage: MutationResolvers['createProgrammingLanguage'] =
  ({ input }) => {
    return db.programmingLanguage.create({
      data: input,
    })
  }

export const updateProgrammingLanguage: MutationResolvers['updateProgrammingLanguage'] =
  ({ id, input }) => {
    return db.programmingLanguage.update({
      data: input,
      where: { id },
    })
  }

export const deleteProgrammingLanguage: MutationResolvers['deleteProgrammingLanguage'] =
  ({ id }) => {
    return db.programmingLanguage.delete({
      where: { id },
    })
  }

export const ProgrammingLanguage: ProgrammingLanguageRelationResolvers = {
  frameworks: (_obj, { root }) => {
    return db.programmingLanguage
      .findUnique({ where: { id: root?.id } })
      .frameworks()
  },
  Project: (_obj, { root }) => {
    return db.programmingLanguage
      .findUnique({ where: { id: root?.id } })
      .Project()
  },
}
