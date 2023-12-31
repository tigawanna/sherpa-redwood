import type { JobAppliedTo } from '@prisma/client'

import {
  jobAppliedTos,
  jobAppliedTo,
  createJobAppliedTo,
  updateJobAppliedTo,
  deleteJobAppliedTo,
} from './jobAppliedTos'
import type { StandardScenario } from './jobAppliedTos.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobAppliedTos', () => {
  scenario('returns all jobAppliedTos', async (scenario: StandardScenario) => {
    const result = await jobAppliedTos()

    expect(result.length).toEqual(Object.keys(scenario.jobAppliedTo).length)
  })

  scenario(
    'returns a single jobAppliedTo',
    async (scenario: StandardScenario) => {
      const result = await jobAppliedTo({ id: scenario.jobAppliedTo.one.id })

      expect(result).toEqual(scenario.jobAppliedTo.one)
    }
  )

  scenario('creates a jobAppliedTo', async () => {
    const result = await createJobAppliedTo({
      input: { title: 'String5983761', updatedAt: '2023-08-21T17:53:09.764Z' },
    })

    expect(result.title).toEqual('String5983761')
    expect(result.updatedAt).toEqual(new Date('2023-08-21T17:53:09.764Z'))
  })

  scenario('updates a jobAppliedTo', async (scenario: StandardScenario) => {
    const original = (await jobAppliedTo({
      id: scenario.jobAppliedTo.one.id,
    })) as JobAppliedTo
    const result = await updateJobAppliedTo({
      id: original.id,
      input: { title: 'String2807322' },
    })

    expect(result.title).toEqual('String2807322')
  })

  scenario('deletes a jobAppliedTo', async (scenario: StandardScenario) => {
    const original = (await deleteJobAppliedTo({
      id: scenario.jobAppliedTo.one.id,
    })) as JobAppliedTo
    const result = await jobAppliedTo({ id: original.id })

    expect(result).toEqual(null)
  })
})
