import type { JobExperience } from '@prisma/client'

import {
  jobExperiences,
  jobExperience,
  createJobExperience,
  updateJobExperience,
  deleteJobExperience,
} from './jobExperiences'
import type { StandardScenario } from './jobExperiences.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobExperiences', () => {
  scenario('returns all jobExperiences', async (scenario: StandardScenario) => {
    const result = await jobExperiences()

    expect(result.length).toEqual(Object.keys(scenario.jobExperience).length)
  })

  scenario(
    'returns a single jobExperience',
    async (scenario: StandardScenario) => {
      const result = await jobExperience({ id: scenario.jobExperience.one.id })

      expect(result).toEqual(scenario.jobExperience.one)
    }
  )

  scenario('creates a jobExperience', async () => {
    const result = await createJobExperience({
      input: {
        updatedAt: '2023-08-19T11:09:21.832Z',
        title: 'String3156764',
        description: 'String',
        years: 2951548,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-19T11:09:21.832Z'))
    expect(result.title).toEqual('String3156764')
    expect(result.description).toEqual('String')
    expect(result.years).toEqual(2951548)
  })

  scenario('updates a jobExperience', async (scenario: StandardScenario) => {
    const original = (await jobExperience({
      id: scenario.jobExperience.one.id,
    })) as JobExperience
    const result = await updateJobExperience({
      id: original.id,
      input: { updatedAt: '2023-08-20T11:09:21.832Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-20T11:09:21.832Z'))
  })

  scenario('deletes a jobExperience', async (scenario: StandardScenario) => {
    const original = (await deleteJobExperience({
      id: scenario.jobExperience.one.id,
    })) as JobExperience
    const result = await jobExperience({ id: original.id })

    expect(result).toEqual(null)
  })
})
