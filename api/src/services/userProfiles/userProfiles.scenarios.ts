import type { Prisma, UserProfile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserProfileCreateArgs>({
  userProfile: {
    one: {
      data: {
        updatedAt: '2023-08-19T11:11:29.199Z',
        email: 'String4190190',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
        resume: {
          create: {
            updatedAt: '2023-08-19T11:11:29.199Z',
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
        updatedAt: '2023-08-19T11:11:29.199Z',
        email: 'String928343',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
        resume: {
          create: {
            updatedAt: '2023-08-19T11:11:29.199Z',
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

export type StandardScenario = ScenarioData<UserProfile, 'userProfile'>
