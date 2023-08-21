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
        updatedAt: '2023-08-21T16:13:07.933Z',
        email: 'String3094629',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
        country: 'String',
        city: 'String',
        phone: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-21T16:13:07.933Z'))
    expect(result.email).toEqual('String3094629')
    expect(result.name).toEqual('String')
    expect(result.about_me).toEqual('String')
    expect(result.image_url).toEqual('String')
    expect(result.country).toEqual('String')
    expect(result.city).toEqual('String')
    expect(result.phone).toEqual('String')
  })

  scenario('updates a userProfile', async (scenario: StandardScenario) => {
    const original = (await userProfile({
      id: scenario.userProfile.one.id,
    })) as UserProfile
    const result = await updateUserProfile({
      id: original.id,
      input: { updatedAt: '2023-08-22T16:13:07.934Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-22T16:13:07.934Z'))
  })

  scenario('deletes a userProfile', async (scenario: StandardScenario) => {
    const original = (await deleteUserProfile({
      id: scenario.userProfile.one.id,
    })) as UserProfile
    const result = await userProfile({ id: original.id })

    expect(result).toEqual(null)
  })
})
