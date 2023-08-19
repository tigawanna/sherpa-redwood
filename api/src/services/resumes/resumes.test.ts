import type { Resume } from '@prisma/client'

import {
  resumes,
  resume,
  createResume,
  updateResume,
  deleteResume,
} from './resumes'
import type { StandardScenario } from './resumes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('resumes', () => {
  scenario('returns all resumes', async (scenario: StandardScenario) => {
    const result = await resumes()

    expect(result.length).toEqual(Object.keys(scenario.resume).length)
  })

  scenario('returns a single resume', async (scenario: StandardScenario) => {
    const result = await resume({ id: scenario.resume.one.id })

    expect(result).toEqual(scenario.resume.one)
  })

  scenario('creates a resume', async () => {
    const result = await createResume({
      input: {
        updatedAt: '2023-08-19T10:22:54.652Z',
        name: 'String',
        location: 'String',
        contactEmail: 'String',
        contactPhone: 'String',
        summary: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-19T10:22:54.652Z'))
    expect(result.name).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.contactEmail).toEqual('String')
    expect(result.contactPhone).toEqual('String')
    expect(result.summary).toEqual('String')
  })

  scenario('updates a resume', async (scenario: StandardScenario) => {
    const original = (await resume({ id: scenario.resume.one.id })) as Resume
    const result = await updateResume({
      id: original.id,
      input: { updatedAt: '2023-08-20T10:22:54.653Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-08-20T10:22:54.653Z'))
  })

  scenario('deletes a resume', async (scenario: StandardScenario) => {
    const original = (await deleteResume({
      id: scenario.resume.one.id,
    })) as Resume
    const result = await resume({ id: original.id })

    expect(result).toEqual(null)
  })
})
