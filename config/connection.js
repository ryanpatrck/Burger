const mysql = require('mysql')
      connection = mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'root',
          database:'burgers_db'
      })

connection.connect((err) =>{
    if (err) throw err
    console.log("connected as id: "+connection.threadid)
})

module.exports = connection;