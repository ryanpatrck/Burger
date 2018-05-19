const express = require('express')
      bodyParser = require('body-parser')
      methodOverride = require('method-override')
      exphbs = require('express-handlebars')

      app = express ()
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'))
app.engine("handlebars", exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

routes = require('./controllers/burgers_controller.js')
app.use('/', routes)

    PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log("App listening on PORT: " + PORT);
    })