// requiring packages
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var exphbs = require("express-handlebars");
var routes = require('./controllers/burgers_controller.js');
var path = require('path');

// establishing a port
var PORT = process.env.PORT  || 3000;

app.use(express.static(path.join(__dirname, '/public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(methodOverride('_method'));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


// using handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// express listener
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
  