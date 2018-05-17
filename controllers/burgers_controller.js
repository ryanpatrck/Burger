const express = require('express')
      router = express.Router()
      burger =   require('../models/burger.js')

    router.get('/', (req, res) => {
        burger.all(((burger_data)=> {
            console.log(burger_data)
            res.render('index', {burger_data});
        }))
       
    })

    module.exports = router;