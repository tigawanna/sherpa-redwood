import type { Prisma, JobExperience } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobExperienceCreateArgs>({
  jobExperience: {
    one: {
      data: {
        updatedAt: '2023-08-19T10:22:10.594Z',
        title: 'String4751405',
        description: 'String',
        years: 8151776,
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-19T10:22:10.594Z',
        title: 'String4531192',
        description: 'String',
        years: 1288728,
      },
    },
  },
})

export type StandardScenario = ScenarioData<JobExperience, 'jobExperience'>
