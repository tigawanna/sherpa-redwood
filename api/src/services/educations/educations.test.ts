import type { Education } from '@prisma/client'

import {
  educations,
  education,
  createEducation,
  updateEducation,
  deleteEducation,
} from './educations'
import type { StandardScenario } from './educations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('educations', () => {
  scenario('returns all educations', async (scenario: StandardScenario) => {
    const result = await educations()

    expect(result.length).toEqual(Object.keys(scenario.education).length)
  })

  scenario('returns a single education', async (scenario: StandardScenario) => {
    const result = await education({ id: scenario.education.one.id })

    expect(result).toEqual(scenario.education.one)
  })

  scenario('creates a education', async () => {
    const result = await createEducation({
      input: {
        updatedAt: '2023-08-21T17:52:25.632Z',
        institute: 'String',
        level: 'String',
        years: 7195408,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-21T17:52:25.632Z'))
    expect(result.institute).toEqual('String')
    expect(result.level).toEqual('String')
    expect(result.years).toEqual(7195408)
  })

  scenario('updates a education', async (scenario: StandardScenario) => {
    const original = (await education({
      id: scenario.education.one.id,
    })) as Education
    const result = await updateEducation({
      id: original.id,
      input: { updatedAt: '2023-08-22T17:52:25.632Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-22T17:52:25.632Z'))
  })

  scenario('deletes a education', async (scenario: StandardScenario) => {
    const original = (await deleteEducation({
      id: scenario.education.one.id,
    })) as Education
    const result = await education({ id: original.id })

    expect(result).toEqual(null)
  })
})
