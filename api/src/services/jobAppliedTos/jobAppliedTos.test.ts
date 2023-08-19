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

  scenario('creates a jobAppliedTo', async (scenario: StandardScenario) => {
    const result = await createJobAppliedTo({
      input: {
        title: 'String4509958',
        updatedAt: '2023-08-19T11:09:43.895Z',
        resumeId: scenario.jobAppliedTo.two.resumeId,
      },
    })

    expect(result.title).toEqual('String4509958')
    expect(result.updatedAt).toEqual(new Date('2023-08-19T11:09:43.895Z'))
    expect(result.resumeId).toEqual(scenario.jobAppliedTo.two.resumeId)
  })

  scenario('updates a jobAppliedTo', async (scenario: StandardScenario) => {
    const original = (await jobAppliedTo({
      id: scenario.jobAppliedTo.one.id,
    })) as JobAppliedTo
    const result = await updateJobAppliedTo({
      id: original.id,
      input: { title: 'String56996922' },
    })

    expect(result.title).toEqual('String56996922')
  })

  scenario('deletes a jobAppliedTo', async (scenario: StandardScenario) => {
    const original = (await deleteJobAppliedTo({
      id: scenario.jobAppliedTo.one.id,
    })) as JobAppliedTo
    const result = await jobAppliedTo({ id: original.id })

    expect(result).toEqual(null)
  })
})
