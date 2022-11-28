import conn from './connection.js'

async function getProjects () {

  const query = `SELECT P.id, P.platform, P.title, P.description, P.user_id, U.username, U.identifier FROM projects P, users U WHERE U.id = P.user_id`

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
        console.log('ERROR: ' + err.sqlMessage);
      }
    })
  })
}

export default getProjects