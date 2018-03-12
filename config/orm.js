// importing MySQL connection
var connection = require("../config/connection.js");


function questionMarks(num) {
    var array =  [];

    for(var i  = 0; i < num; i++) {
        array.push("?");
    };
    return array.toString();
};


function convertSql(obj) {
    var array = [];

    for (var key in obj) {
        array.push(key + "=" + obj[key]);
    };

    return array.toString();    
}

var orm = {

    // finding all burgers
    selectAll: function(input,callback) { 
        var query = "SELECT * FROM" + input + ";";
        connection.query(query, function(error,result) {
            callback(result);
        });
},

    // creating a new burger
    insertOne: function(table,cols,vals,callback) {
        var query = 'INSERT INTO ' + table + ' (' + cols.toString() +') ' + 'VALUES (' + questionMark(vals.length) + ') ';

        connection.query(query,vals,function(error,result) {
            callback(result);
        });
    },

    // updating an burger
    updateOne: function(table,columnVals,selectWhere,callback) {
        var query = 'UPDATE ' + table + ' SET ' + convertSql(columnVals) + ' WHERE ' +  selectWhere;
        connection.query(query,function(error,result) {
            callback(result);
        });
    }
};


// exporting orm function for use
module.exports = orm;
