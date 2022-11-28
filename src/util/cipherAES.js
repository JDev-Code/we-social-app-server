import CryptoJS from "crypto-js"

function cipherAES(data){
  const key = 'a{sgJa=aKs-aPe<k3J?'
  const cipherString = CryptoJS.AES.encrypt(data, key).toString()
  return cipherString
}

export default cipherAES