import type { Prisma, Resume } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ResumeCreateArgs>({
  resume: {
    one: {
      data: {
        updatedAt: '2023-08-19T11:10:10.542Z',
        name: 'String',
        location: 'String',
        contactEmail: 'String',
        contactPhone: 'String',
        summary: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-19T11:10:10.542Z',
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