import type { Prisma, Skill } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SkillCreateArgs>({
  skill: {
    one: {
      data: {
        updatedAt: '2023-08-21T17:53:32.070Z',
        name: 'String',
        description: 'String',
        url: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-21T17:53:32.070Z',
        name: 'String',
        description: 'String',
        url: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Skill, 'skill'>
