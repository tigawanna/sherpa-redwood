import type { Prisma, UserProfile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserProfileCreateArgs>({
  userProfile: {
    one: {
      data: {
        email: 'String2630959',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
      },
    },
    two: {
      data: {
        email: 'String1177900',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserProfile, 'userProfile'>
