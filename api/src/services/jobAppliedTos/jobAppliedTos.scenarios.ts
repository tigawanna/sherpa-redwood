import type { Prisma, JobAppliedTo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobAppliedToCreateArgs>({
  jobAppliedTo: {
    one: {
      data: { title: 'String5497923', updatedAt: '2023-08-21T17:53:09.815Z' },
    },
    two: {
      data: { title: 'String4626055', updatedAt: '2023-08-21T17:53:09.815Z' },
    },
  },
})

export type StandardScenario = ScenarioData<JobAppliedTo, 'jobAppliedTo'>
