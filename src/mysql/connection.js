import mysql from 'mysql'

const conn = mysql.createConnection({
  host: "we-social-app-database.cqfsypqe5mgn.eu-west-3.rds.amazonaws.com",
  user: "masterUsername",
  password: "aaa111!!!",
  database: "we-db"
})

conn.connect(function (err) {
  try {
    if (err) throw err
    console.log("DATABASE CONNECTED!")
  } catch {
    console.log('ERROR: ' + err.code)
  }
})


export default conn