import conn from './connection.js'

// Crea un nuevo usuario en la base de datos
async function signUp (id, username, identifier, email, password) {

  const query = `INSERT INTO users (id, username, identifier, email, password) VALUES ( '${id}', '${username}', '${identifier}', '${email}', '${password}')`

  return new Promise((resolve) => {
    conn.query(query, function (err, result) {
      try {
        if (err) throw err
        if (result.affectedRows > 0) { 
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

export default signUp