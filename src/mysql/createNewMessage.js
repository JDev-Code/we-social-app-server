import conn from './connection.js'

async function createNewMessage (msg) {

  const query = `INSERT INTO messages(msgFrom, msgTo, message, isRead) VALUES("${msg.msgFrom}","${msg.msgTo}","${msg.message}", 0 )`

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

export default createNewMessage