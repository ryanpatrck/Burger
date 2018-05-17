const connection = require('./connection.js')
      orm = {
          all: (tableInput, cb) => {
               connection.query('SELECT * FROM '+tableInput+';', (err, result) => {
                if(err) throw err;
                cb(result)
               })
          },

          update: (tableInput, condition, cb) => {
              connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='
            +condition+';', (err, result) => {
                if(err) throw err;
                cb(result)
            })
          }, 
          create: (table,val,cb) => {
              
          }
      }
module.exports = orm;