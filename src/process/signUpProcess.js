import cipherAES from "../util/cipherAES.js"
import decipherAES from "../util/decipherAES.js"
import cipherMD5 from "../util/cipherMD5.js"
import checkEmail from "../mysql/checkEmail.js"
import checkUsername from "../mysql/checkUsername.js"
import generateID from "../util/generateID.js"
import generateNumber from "../util/generateNumber.js"
import signUp from "../mysql/signUp.js"


async function signUpProcess(req){

  console.log('SIGNUP')

  var response = {
    correct: false
  }

  const username = decipherAES(req.body.username)
  const email = decipherAES(req.body.email)
  const password = decipherAES(req.body.password)

  const emailMD5 = cipherMD5(email)
  const emailChecked = await checkEmail(emailMD5)

  if (emailChecked) {
    const passwordMD5 = cipherMD5(password)
    const id = generateID(emailMD5, passwordMD5)

    var userReady = false
    var identifier
    while (!userReady) {
      identifier = generateNumber()
      const isReady = await checkUsername(username, identifier)
      if (isReady) userReady = true
    }

    const exist = await signUp(id, username, identifier, emailMD5, passwordMD5)

    if (exist) {
      response = {
        correct: exist,
        id: cipherAES(id),
        username: cipherAES(username),
        identifier: cipherAES(identifier)
      }
    } 
  }

  return(response)
}

export default signUpProcess