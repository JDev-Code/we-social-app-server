import conn from './connection.js'

// Borra un proyecto de la base de datos
async function deleteProject (id) {

  const query = `DELETE FROM projects WHERE id=${id}`

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

export default deleteProject