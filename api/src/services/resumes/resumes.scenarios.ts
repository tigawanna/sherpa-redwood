import type { Prisma, Resume } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ResumeCreateArgs>({
  resume: {
    one: {
      data: {
        name: 'String',
        location: 'String',
        contactEmail: 'String',
        contactPhone: 'String',
        summary: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        location: 'String',
        contactEmail: 'String',
        contactPhone: 'String',
        summary: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Resume, 'resume'>
