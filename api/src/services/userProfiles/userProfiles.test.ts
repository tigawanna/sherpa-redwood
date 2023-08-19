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

  scenario('creates a userProfile', async (scenario: StandardScenario) => {
    const result = await createUserProfile({
      input: {
        updatedAt: '2023-08-19T11:11:29.119Z',
        email: 'String3103386',
        name: 'String',
        about_me: 'String',
        image_url: 'String',
        resumeId: scenario.userProfile.two.resumeId,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-19T11:11:29.119Z'))
    expect(result.email).toEqual('String3103386')
    expect(result.name).toEqual('String')
    expect(result.about_me).toEqual('String')
    expect(result.image_url).toEqual('String')
    expect(result.resumeId).toEqual(scenario.userProfile.two.resumeId)
  })

  scenario('updates a userProfile', async (scenario: StandardScenario) => {
    const original = (await userProfile({
      id: scenario.userProfile.one.id,
    })) as UserProfile
    const result = await updateUserProfile({
      id: original.id,
      input: { updatedAt: '2023-08-20T11:11:29.119Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-20T11:11:29.119Z'))
  })

  scenario('deletes a userProfile', async (scenario: StandardScenario) => {
    const original = (await deleteUserProfile({
      id: scenario.userProfile.one.id,
    })) as UserProfile
    const result = await userProfile({ id: original.id })

    expect(result).toEqual(null)
  })
})
