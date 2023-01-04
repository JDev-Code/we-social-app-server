import conn from './connection.js'

// Obtiene la informacion de un usuario de la base de datos
async function getUserInfo (id) {

  const query = `SELECT id, username, identifier FROM users WHERE id='${id}'`

  return new Promise((resolve) => {

    conn.query(query, function (err, result) {
      try {
        if (err) throw err
        if (result.length === 0) {
          resolve(false)
        } else {
          resolve(result)
        }
      } catch {
        console.log('ERROR: ' + err.message);
      }
    })
  })
}

export default getUserInfo