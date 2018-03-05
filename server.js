var express = require('express');
var methodOveride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var exphbs = require("express-handlebars");

var PORT = process.env.PORT  || 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
  