const orm = require('../config/orm.js')
      
      burger = {
          all: (cb) => {
              orm.all("burgers", (res) => {
                  cb(res);
              })
          }, 

          update: (id, cb) => {
              orm.update('burgers',id,cb);
          },

          create: (name,cb) => {
              orm.create('burgers', name, cb)
          }
      }

      module.exports = burger;