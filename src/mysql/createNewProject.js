import conn from './connection.js'

// Guarda un nuevo proyecto en la base de datos
async function createNewProject (id, platform, title, description) {

  const query = `INSERT INTO projects(user_id, platform, title, description) VALUES("${id}","${platform}","${title}","${description}" )`

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

export default createNewProject