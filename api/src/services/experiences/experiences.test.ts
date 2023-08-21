import type { Experience } from '@prisma/client'

import {
  experiences,
  experience,
  createExperience,
  updateExperience,
  deleteExperience,
} from './experiences'
import type { StandardScenario } from './experiences.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('experiences', () => {
  scenario('returns all experiences', async (scenario: StandardScenario) => {
    const result = await experiences()

    expect(result.length).toEqual(Object.keys(scenario.experience).length)
  })

  scenario(
    'returns a single experience',
    async (scenario: StandardScenario) => {
      const result = await experience({ id: scenario.experience.one.id })

      expect(result).toEqual(scenario.experience.one)
    }
  )

  scenario('creates a experience', async () => {
    const result = await createExperience({
      input: {
        updatedAt: '2023-08-21T17:52:48.892Z',
        title: 'String2965253',
        description: 'String',
        years: 5393971,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-21T17:52:48.892Z'))
    expect(result.title).toEqual('String2965253')
    expect(result.description).toEqual('String')
    expect(result.years).toEqual(5393971)
  })

  scenario('updates a experience', async (scenario: StandardScenario) => {
    const original = (await experience({
      id: scenario.experience.one.id,
    })) as Experience
    const result = await updateExperience({
      id: original.id,
      input: { updatedAt: '2023-08-22T17:52:48.892Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-22T17:52:48.892Z'))
  })

  scenario('deletes a experience', async (scenario: StandardScenario) => {
    const original = (await deleteExperience({
      id: scenario.experience.one.id,
    })) as Experience
    const result = await experience({ id: original.id })

    expect(result).toEqual(null)
  })
})
