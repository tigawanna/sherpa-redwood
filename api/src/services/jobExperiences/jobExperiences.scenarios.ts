import type { Prisma, JobExperience } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobExperienceCreateArgs>({
  jobExperience: {
    one: {
      data: {
        updatedAt: '2023-08-19T11:09:21.915Z',
        title: 'String3340238',
        description: 'String',
        years: 1366831,
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-19T11:09:21.916Z',
        title: 'String8628153',
        description: 'String',
        years: 450564,
      },
    },
  },
})

export type StandardScenario = ScenarioData<JobExperience, 'jobExperience'>
