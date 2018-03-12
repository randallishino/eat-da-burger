var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();
console.log(burger);

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerData = {
            burgers: data
        };
        res.render("index", burgerData);
    });
  });

  module.exports = router;