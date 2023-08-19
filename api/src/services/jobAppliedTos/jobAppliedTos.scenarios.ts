import type { Prisma, JobAppliedTo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobAppliedToCreateArgs>({
  jobAppliedTo: {
    one: {
      data: {
        title: 'String226808',
        updatedAt: '2023-08-19T11:09:43.969Z',
        resume: {
          create: {
            updatedAt: '2023-08-19T11:09:43.969Z',
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
        title: 'String7612987',
        updatedAt: '2023-08-19T11:09:43.969Z',
        resume: {
          create: {
            updatedAt: '2023-08-19T11:09:43.969Z',
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
