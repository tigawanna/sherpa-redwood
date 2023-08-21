import type { Prisma, JobAppliedTo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobAppliedToCreateArgs>({
  jobAppliedTo: {
    one: {
      data: { title: 'String1744538', updatedAt: '2023-08-21T16:12:15.934Z' },
    },
    two: {
      data: { title: 'String1686590', updatedAt: '2023-08-21T16:12:15.934Z' },
    },
  },
})

export type StandardScenario = ScenarioData<JobAppliedTo, 'jobAppliedTo'>
