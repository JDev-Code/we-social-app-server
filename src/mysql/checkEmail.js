import conn from './connection.js'

// Comprueba si un email existe en la base de datos
async function checkEmail (email) {

  const query = `SELECT * FROM users WHERE email="${email}"`

  return new Promise((resolve) => {

    conn.query(query, function (err, result) {
      try {
        if (err) throw err
        if (result.length === 0) {
          resolve(true)
        } else {
          resolve(false)
        }
      } catch {
        console.log('ERROR: ' + err.message);
      }
    })
  })


}

export default checkEmail
