// importing MySQL connection
var connection = require("../config/connection.js");
var orm = {
    selectAll: function(input,callback) { 
        var query = "SELECT * FROM" + input + ";";
        connection.query(query, function(error,result) {
            callback(result);
        });
    }
}