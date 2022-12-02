import conn from './connection.js'

async function getMessages (myId) {

  const query = `SELECT M.msgFrom, M.msgTo, M.message, M.isRead, U.username, U.identifier 
                  FROM messages M 
                    INNER JOIN users U 
                      ON (M.msgFrom=U.id OR M.msgTo=U.id) 
                        WHERE (M.msgFrom='${myId}' OR M.msgTo='${myId}') 
                          AND U.id!='${myId}' ORDER BY M.msgID`

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

export default getMessages