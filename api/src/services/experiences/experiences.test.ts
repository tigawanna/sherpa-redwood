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
        updatedAt: '2023-08-21T16:11:56.707Z',
        title: 'String8001949',
        description: 'String',
        years: 6740130,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-21T16:11:56.707Z'))
    expect(result.title).toEqual('String8001949')
    expect(result.description).toEqual('String')
    expect(result.years).toEqual(6740130)
  })

  scenario('updates a experience', async (scenario: StandardScenario) => {
    const original = (await experience({
      id: scenario.experience.one.id,
    })) as Experience
    const result = await updateExperience({
      id: original.id,
      input: { updatedAt: '2023-08-22T16:11:56.708Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-22T16:11:56.708Z'))
  })

  scenario('deletes a experience', async (scenario: StandardScenario) => {
    const original = (await deleteExperience({
      id: scenario.experience.one.id,
    })) as Experience
    const result = await experience({ id: original.id })

    expect(result).toEqual(null)
  })
})
