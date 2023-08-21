import type { Prisma, Education } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EducationCreateArgs>({
  education: {
    one: {
      data: {
        updatedAt: '2023-08-21T16:11:32.811Z',
        institute: 'String',
        level: 'String',
        years: 1776921,
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-21T16:11:32.811Z',
        institute: 'String',
        level: 'String',
        years: 2439048,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Education, 'education'>
