import type { Prisma, Experience } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ExperienceCreateArgs>({
  experience: {
    one: {
      data: {
        updatedAt: '2023-08-21T17:52:48.924Z',
        title: 'String8860974',
        description: 'String',
        years: 8234295,
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-21T17:52:48.924Z',
        title: 'String1114384',
        description: 'String',
        years: 485044,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Experience, 'experience'>
