import type { Prisma, Education } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EducationCreateArgs>({
  education: {
    one: {
      data: {
        updatedAt: '2023-08-19T10:21:45.308Z',
        institute: 'String',
        level: 'String',
        years: 2048642,
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-19T10:21:45.308Z',
        institute: 'String',
        level: 'String',
        years: 7726904,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Education, 'education'>
