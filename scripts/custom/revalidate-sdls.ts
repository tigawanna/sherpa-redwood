
import fs from "fs"
import fsp from "fs/promises"





export async function getAllModels() {
  try {
    const schema_string = await fsp.readFile("api/db/schema.prisma",{encoding:"utf8"})
    return extractModelNames(schema_string)
  } catch (error) {
    throw new Error("error getting model naes \n"+error)
  }
}

function extractModelNames(schema:string) {
  const regex = /model\s+(\w+)\s+/g;
  const matches = schema.match(regex);
  const models = [];

  if (matches) {
    for (const match of matches) {
      const modelName = match.match(/\bmodel\s+(\w+)\s+/)[1];
      models.push(modelName);
    }
  }

  return models as string[];
}


export async function removeDirectory(directoryPath: string) {
const delayTime = 1000;
  try {
    if(!fs.existsSync(directoryPath)){
      return
    }
    await fsp.rm(directoryPath, { recursive: true });
    // printHelpers.success(directoryPath + " removed successfully");

  } catch (error: any) {
    // printHelpers.error(`Error removing ${directoryPath} directory:`, error);
    if (error.code === "EBUSY") {
      await delay(delayTime);
      await removeDirectory(directoryPath);
    } else {
    throw new Error(`Error removing ${directoryPath} directory:`, error);
    }

  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}



export async function revalidateSDLs() {
  try {
    await removeDirectory("api/src/graphql")
    await removeDirectory("api/src/services")
    const new_models = await getAllModels()
    console.log(`removed old SDLs run below to re-generate `)
    const models_commands = new_models.map((model) => {
      // re generate the SDLs with redwood cli
      console.log(`yarn rw g sdl ${model}`)
    })

    return models_commands
  } catch (error) {
    // console.log(error)
    throw new Error("error revalidating sdl files",error)
  }
}

revalidateSDLs()
.catch(console.error)
