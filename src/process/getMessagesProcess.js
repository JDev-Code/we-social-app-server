import getMessages from "../mysql/getMessages.js"
import decipherAES from "../util/decipherAES.js"

// Proceso para obtener mensajes de un usuario
async function getMessagesProcess(req){
  console.log('GETMESSAGES')
  
  let response = {
    correct: false
  }
  const myId = decipherAES(req.headers.id)
  const messages = await getMessages(myId)

  if (messages !== false) {
    response = {
      correct: true,
      data: messages
    }
  }

  return (response)
}

export default getMessagesProcess