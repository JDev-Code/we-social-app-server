import CryptoJS from "crypto-js"

function cipherMD5(data){
  const md5 = CryptoJS.MD5(data).toString()
  return md5
}

export default cipherMD5