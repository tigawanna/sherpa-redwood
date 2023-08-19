import type { UserProfile } from '@prisma/client'

import {
  userProfiles,
  userProfile,
  createUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from './userProfiles'
import type { StandardScenario } from './userProfiles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userProfiles', () => {
  scenario('returns all userProfiles', async (scenario: StandardScenario) => {
    const result = await userProfiles()

    expect(result.length).toEqual(Object.keys(scenario.userProfile).length)
  })

  scenario(
    'returns a single userProfile',
    async (scenario: StandardScenario) => {
      const result = await userProfile({ id: scenario.userProfile.one.id })

      expect(result).toEqual(scenario.userProfile.one)
    }
  )

  scenario('creates a userProfile', async () => {
    const result = await createUserProfile({
      input: {
        email: 'String6137728',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
      },
    })

    expect(result.email).toEqual('String6137728')
    expect(result.name).toEqual('String')
    expect(result.about_me).toEqual('String')
    expect(result.image_url).toEqual('String')
  })

  scenario('updates a userProfile', async (scenario: StandardScenario) => {
    const original = (await userProfile({
      id: scenario.userProfile.one.id,
    })) as UserProfile
    const result = await updateUserProfile({
      id: original.id,
      input: { email: 'String37336392' },
    })

    expect(result.email).toEqual('String37336392')
  })

  scenario('deletes a userProfile', async (scenario: StandardScenario) => {
    const original = (await deleteUserProfile({
      id: scenario.userProfile.one.id,
    })) as UserProfile
    const result = await userProfile({ id: original.id })

    expect(result).toEqual(null)
  })
})
