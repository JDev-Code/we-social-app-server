import mysql from 'mysql2'

// Conexion a la base de datos
const conn = mysql.createPool({
  host: "containers-us-west-65.railway.app",
  user: "root",
  password: "aaa111!!!",
  database: "railway",
  port: 7312
})

conn.getConnection(function(err, connection) {
  conn.releaseConnection(connection) 
})

export default conn
