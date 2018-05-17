const orm = require('../config/orm.js')
      
      burger = {
          all: (cb) => {
              orm.all("burgers", (res) => {
                  cb(res);
              })
          }
      }

      module.exports = burger;