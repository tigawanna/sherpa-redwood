import type { Prisma, Education } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EducationCreateArgs>({
  education: {
    one: {
      data: {
        updatedAt: '2023-08-21T17:52:25.676Z',
        institute: 'String',
        level: 'String',
        years: 7497498,
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-21T17:52:25.676Z',
        institute: 'String',
        level: 'String',
        years: 4778809,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Education, 'education'>
