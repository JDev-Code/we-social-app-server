import CryptoJS from "crypto-js"

function decipherAES(data){
  const key = 'a{sgJa=aKs-aPe<k3J?'
  const decipherString = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
  return decipherString
}

export default decipherAES