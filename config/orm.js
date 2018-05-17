const connection = require('./connection.js')
      orm = {
          all: (tableInput, cb) => {
               connection.query('SELECT * FROM '+tableInput+';', (err, result) => {
                if(err) throw err;
                cb(result)
               })
          }
      }
module.exports = orm;