import type { Prisma, Framework } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FrameworkCreateArgs>({
  framework: {
    one: {
      data: {
        updatedAt: '2023-08-21T17:51:56.318Z',
        name: 'String',
        description: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-21T17:51:56.318Z',
        name: 'String',
        description: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Framework, 'framework'>
