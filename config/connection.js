const mysql = require('mysql')
      connection = mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'root',
          database:'burgers_db'
      })
      