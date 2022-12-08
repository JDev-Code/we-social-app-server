import mysql from 'mysql2'

const conn = mysql.createPool({
  host: "containers-us-west-65.railway.app",
  user: "root",
  password: "aaa111!!!",
  database: "railway",
  port: 7312
})

conn.connect(function (err) {
  try {
    if (err) throw err
    console.log("DATABASE CONNECTED!")
  } catch {
    console.log('ERROR: ' + err.message)
  }
}) 

export default conn