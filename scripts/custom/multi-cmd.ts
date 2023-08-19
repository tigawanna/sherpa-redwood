import fs from 'fs'
import fsp from 'fs/promises'

export async function getAllModels() {
  try {
    const schema_string = await fsp.readFile('api/db/schema.prisma', {
      encoding: 'utf8',
    })
    return extractModelNames(schema_string)
  } catch (error) {
    throw new Error('error getting model naes \n' + error)
  }
}

function extractModelNames(schema: string) {
  const regex = /model\s+(\w+)\s+/g
  const matches = schema.match(regex)
  const models = []

  if (matches) {
    for (const match of matches) {
      const modelName = match.match(/\bmodel\s+(\w+)\s+/)[1]
      models.push(modelName)
    }
  }

  return models as string[]
}


export async function multiCmds() {
  try {
    const args = process.argv.slice(2)
    const new_models = await getAllModels()
    console.log(`removed old SDLs run below to re-generate `)
    const models_commands = new_models.map((model) => {
      // re generate the SDLs with redwood cli
      console.log(`yarn ${args.join(' ')} ${model}`)
    })

    return models_commands
  } catch (error) {
    // console.log(error)
    throw new Error('error revalidating sdl files', error)
  }
}

multiCmds().catch(console.error)
