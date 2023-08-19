import type { Prisma, ProgrammingLanguage } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProgrammingLanguageCreateArgs>({
  programmingLanguage: {
    one: { data: { name: 'String', color: 'String' } },
    two: { data: { name: 'String', color: 'String' } },
  },
})

export type StandardScenario = ScenarioData<
  ProgrammingLanguage,
  'programmingLanguage'
>
