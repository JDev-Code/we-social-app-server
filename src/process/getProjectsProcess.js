import getProjects from "../mysql/getProjects.js"

async function getProjectsProcess(){
  console.log('GETPROJECTS');
  var response = {
    correct: false
  }

  const projects = await getProjects()
  if (projects !== false) {
    response = {
      correct: true,
      data: projects
    }
  }
  return(response)
}

export default getProjectsProcess