import type { Framework } from '@prisma/client'

import {
  frameworks,
  framework,
  createFramework,
  updateFramework,
  deleteFramework,
} from './frameworks'
import type { StandardScenario } from './frameworks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('frameworks', () => {
  scenario('returns all frameworks', async (scenario: StandardScenario) => {
    const result = await frameworks()

    expect(result.length).toEqual(Object.keys(scenario.framework).length)
  })

  scenario('returns a single framework', async (scenario: StandardScenario) => {
    const result = await framework({ id: scenario.framework.one.id })

    expect(result).toEqual(scenario.framework.one)
  })

  scenario('creates a framework', async () => {
    const result = await createFramework({
      input: {
        updatedAt: '2023-08-21T16:11:06.138Z',
        name: 'String',
        description: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-21T16:11:06.138Z'))
    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a framework', async (scenario: StandardScenario) => {
    const original = (await framework({
      id: scenario.framework.one.id,
    })) as Framework
    const result = await updateFramework({
      id: original.id,
      input: { updatedAt: '2023-08-22T16:11:06.139Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-22T16:11:06.139Z'))
  })

  scenario('deletes a framework', async (scenario: StandardScenario) => {
    const original = (await deleteFramework({
      id: scenario.framework.one.id,
    })) as Framework
    const result = await framework({ id: original.id })

    expect(result).toEqual(null)
  })
})
