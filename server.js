const express = require('express')
      bodyParser = require('body-parser')
      methodOverride = require('method-override')
      exphbs = require('express-handlebars')

      app = express ()
app.use(express.static(_dirname + '/public'))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'))
app.engine("handlebars", exphbs({
    defaultLayout: 'main'
}))
