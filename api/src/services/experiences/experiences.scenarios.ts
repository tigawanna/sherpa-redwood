import type { Prisma, Experience } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ExperienceCreateArgs>({
  experience: {
    one: {
      data: {
        updatedAt: '2023-08-21T16:11:56.772Z',
        title: 'String6046949',
        description: 'String',
        years: 8824317,
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-21T16:11:56.772Z',
        title: 'String9191125',
        description: 'String',
        years: 9553205,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Experience, 'experience'>
