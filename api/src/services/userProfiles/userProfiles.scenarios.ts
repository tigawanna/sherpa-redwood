import type { Prisma, UserProfile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserProfileCreateArgs>({
  userProfile: {
    one: {
      data: {
        updatedAt: '2023-08-21T16:13:08.011Z',
        email: 'String278916',
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
        updatedAt: '2023-08-21T16:13:08.011Z',
        email: 'String1572338',
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
