import decipherAES from "../util/decipherAES.js"
import createNewProject from "../mysql/createNewProject.js"

async function newProjectProcess(req){
  console.log('NEWPROJECT')
  var response = response = {
    correct: false
  }
  const id = decipherAES(req.body.id)
  const platform = decipherAES(req.body.platform)
  const title = decipherAES(req.body.title)
  const description = decipherAES(req.body.description)

  const isDone = await createNewProject(id, platform, title, description)

  if (isDone) {
    response = {
      correct: true
    }
  }

  return(response)
}

export default newProjectProcess