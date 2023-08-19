import type { Prisma, JobAppliedTo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobAppliedToCreateArgs>({
  jobAppliedTo: {
    one: {
      data: {
        title: 'String266952',
        updatedAt: '2023-08-19T10:22:35.883Z',
        resume: {
          create: {
            updatedAt: '2023-08-19T10:22:35.883Z',
            name: 'String',
            location: 'String',
            contactEmail: 'String',
            contactPhone: 'String',
            summary: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String7263517',
        updatedAt: '2023-08-19T10:22:35.883Z',
        resume: {
          create: {
            updatedAt: '2023-08-19T10:22:35.884Z',
            name: 'String',
            location: 'String',
            contactEmail: 'String',
            contactPhone: 'String',
            summary: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<JobAppliedTo, 'jobAppliedTo'>
