import cipherMD5 from "./cipherMD5.js"

// Genera un identificador para un usuario
function generateID(email, password){
  const code = 'j(D7a9/m4}'
  const string = email + code + password

  return cipherMD5(string)
}

export default generateID