import cipherAES from "../util/cipherAES.js"
import decipherAES from "../util/decipherAES.js"
import cipherMD5 from "../util/cipherMD5.js"
import logIn from "../mysql/logIn.js"

async function logInProcess (req) {

  console.log('LOGIN')

  let response = {
    correct: false
  }

  const email = decipherAES(req.body.email)
  const password = decipherAES(req.body.password)

  const emailMD5 = cipherMD5(email)
  const passwordMD5 = cipherMD5(password)

  const userInfo = await logIn(emailMD5, passwordMD5)

  if (typeof userInfo === 'object') {
    response = {
      correct: true,
      id: cipherAES(userInfo.id),
      username: cipherAES(userInfo.username),
      identifier: cipherAES(userInfo.identifier)
    }
  }
  
  return (response)
}

export default logInProcess