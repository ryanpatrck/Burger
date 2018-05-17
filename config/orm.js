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
          create: (tableInput,val,cb) => {
              connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", (err, result) => {
                if(err) throw err
                cb(result);
              })
          }
      }
module.exports = orm;