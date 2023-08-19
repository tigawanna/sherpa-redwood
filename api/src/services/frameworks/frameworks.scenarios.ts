import type { Prisma, Framework } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FrameworkCreateArgs>({
  framework: {
    one: { data: { name: 'String', description: 'String' } },
    two: { data: { name: 'String', description: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Framework, 'framework'>
