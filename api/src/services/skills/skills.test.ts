import type { Skill } from '@prisma/client'

import { skills, skill, createSkill, updateSkill, deleteSkill } from './skills'
import type { StandardScenario } from './skills.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('skills', () => {
  scenario('returns all skills', async (scenario: StandardScenario) => {
    const result = await skills()

    expect(result.length).toEqual(Object.keys(scenario.skill).length)
  })

  scenario('returns a single skill', async (scenario: StandardScenario) => {
    const result = await skill({ id: scenario.skill.one.id })

    expect(result).toEqual(scenario.skill.one)
  })

  scenario('creates a skill', async () => {
    const result = await createSkill({
      input: {
        updatedAt: '2023-08-21T16:12:40.059Z',
        name: 'String',
        description: 'String',
        url: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-21T16:12:40.059Z'))
    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.url).toEqual('String')
  })

  scenario('updates a skill', async (scenario: StandardScenario) => {
    const original = (await skill({ id: scenario.skill.one.id })) as Skill
    const result = await updateSkill({
      id: original.id,
      input: { updatedAt: '2023-08-22T16:12:40.059Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-22T16:12:40.059Z'))
  })

  scenario('deletes a skill', async (scenario: StandardScenario) => {
    const original = (await deleteSkill({ id: scenario.skill.one.id })) as Skill
    const result = await skill({ id: original.id })

    expect(result).toEqual(null)
  })
})
