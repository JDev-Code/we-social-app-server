import getUserInfo from '../mysql/getUserInfo.js'
import decipherAES from '../util/decipherAES.js'

// Proceso para obtener la información de un usuario
async function getUserInfoProcess(req){
  console.log('GETUSERINFO')
  var response = {
    correct: false
  }

  const id = decipherAES(req.headers.id)

  const userInfo = await getUserInfo(id)
  if (userInfo !== false) {
    response = {
      correct: true,
      data: userInfo
    }
  }
  return(response)
}

export default getUserInfoProcess