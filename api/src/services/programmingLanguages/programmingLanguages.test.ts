import type { ProgrammingLanguage } from '@prisma/client'

import {
  programmingLanguages,
  programmingLanguage,
  createProgrammingLanguage,
  updateProgrammingLanguage,
  deleteProgrammingLanguage,
} from './programmingLanguages'
import type { StandardScenario } from './programmingLanguages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('programmingLanguages', () => {
  scenario(
    'returns all programmingLanguages',
    async (scenario: StandardScenario) => {
      const result = await programmingLanguages()

      expect(result.length).toEqual(
        Object.keys(scenario.programmingLanguage).length
      )
    }
  )

  scenario(
    'returns a single programmingLanguage',
    async (scenario: StandardScenario) => {
      const result = await programmingLanguage({
        id: scenario.programmingLanguage.one.id,
      })

      expect(result).toEqual(scenario.programmingLanguage.one)
    }
  )

  scenario('creates a programmingLanguage', async () => {
    const result = await createProgrammingLanguage({
      input: {
        updatedAt: '2023-08-21T17:51:35.945Z',
        name: 'String',
        color: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-21T17:51:35.945Z'))
    expect(result.name).toEqual('String')
    expect(result.color).toEqual('String')
  })

  scenario(
    'updates a programmingLanguage',
    async (scenario: StandardScenario) => {
      const original = (await programmingLanguage({
        id: scenario.programmingLanguage.one.id,
      })) as ProgrammingLanguage
      const result = await updateProgrammingLanguage({
        id: original.id,
        input: { updatedAt: '2023-08-22T17:51:35.945Z' },
      })

      expect(result.updatedAt).toEqual(new Date('2023-08-22T17:51:35.945Z'))
    }
  )

  scenario(
    'deletes a programmingLanguage',
    async (scenario: StandardScenario) => {
      const original = (await deleteProgrammingLanguage({
        id: scenario.programmingLanguage.one.id,
      })) as ProgrammingLanguage
      const result = await programmingLanguage({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
