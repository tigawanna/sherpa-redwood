import type { Prisma, ProgrammingLanguage } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProgrammingLanguageCreateArgs>({
  programmingLanguage: {
    one: {
      data: {
        updatedAt: '2023-08-19T10:23:31.780Z',
        name: 'String',
        color: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-19T10:23:31.780Z',
        name: 'String',
        color: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  ProgrammingLanguage,
  'programmingLanguage'
>
