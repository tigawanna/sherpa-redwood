import type { Prisma, Project } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: {
      data: {
        updatedAt: '2023-08-21T17:51:15.566Z',
        name: 'String',
        description: 'String',
        repoUrl: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-21T17:51:15.566Z',
        name: 'String',
        description: 'String',
        repoUrl: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Project, 'project'>
