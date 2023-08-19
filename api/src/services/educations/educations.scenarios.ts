import type { Prisma, Education } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EducationCreateArgs>({
  education: {
    one: {
      data: {
        updatedAt: '2023-08-19T11:08:54.429Z',
        institute: 'String',
        level: 'String',
        years: 2747548,
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-19T11:08:54.429Z',
        institute: 'String',
        level: 'String',
        years: 1479550,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Education, 'education'>
