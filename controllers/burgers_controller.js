var burger = require('../models/burger.js');
var server = require('../server.js');
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