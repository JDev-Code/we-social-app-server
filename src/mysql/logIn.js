import conn from './connection.js'

async function logIn (email, password) {

  const query = `SELECT * FROM users WHERE email="${email}" AND password="${password}"`

  return new Promise((resolve) => {

    conn.query(query, function (err, result) {
      try {
        if (err) throw err
        if (result.length === 0) {
          resolve(false)
        } else {
          const userInfo = {
            id: result[0].id,
            username: result[0].username,
            identifier: result[0].identifier
          }
          resolve(userInfo)
        }
      } catch {
        console.log('ERROR: ' + err.sqlMessage);
      }
    })
  })


}

export default logIn
