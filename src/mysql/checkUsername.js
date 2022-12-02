import conn from './connection.js'

async function checkUsername (username, indentifier) {

  const query = `SELECT * FROM users WHERE username="${username}" AND identifier="${indentifier}"`

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

export default checkUsername