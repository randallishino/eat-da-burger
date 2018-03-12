// requiring packages/routes
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var exphbs = require("express-handlebars");
var path = require('path');
var routes = require('./controllers/burgers_controller.js');


// establishing a port
var PORT = process.env.PORT  || 3000;


// using handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(process.cwd() + "/public"));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(methodOverride('_method'));

// parse application/json
app.use(bodyParser.json());

app.use('/', routes);


// express listener
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
  