import type { Prisma, UserProfile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserProfileCreateArgs>({
  userProfile: {
    one: {
      data: {
        updatedAt: '2023-08-21T17:50:39.196Z',
        email: 'String808202',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
        country: 'String',
        city: 'String',
        phone: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2023-08-21T17:50:39.196Z',
        email: 'String8828834',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
        country: 'String',
        city: 'String',
        phone: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserProfile, 'userProfile'>
