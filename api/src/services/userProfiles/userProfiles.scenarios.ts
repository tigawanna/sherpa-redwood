import type { Prisma, UserProfile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserProfileCreateArgs>({
  userProfile: {
    one: {
      data: {
        email: 'String1119208',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
      },
    },
    two: {
      data: {
        email: 'String8773472',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserProfile, 'userProfile'>
