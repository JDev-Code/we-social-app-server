import deleteProject from '../mysql/deleteProject.js'

async function deleteProjectProcess (req) {
  let response = {
    correct: false
  }
  const res = await deleteProject(req.body.id)

  if (res) {
    response = { 
      correct: true 
    }
  }

  return response
}

export default deleteProjectProcess