// requiring orm from the config
var orm = require('../config/orm.js');


var burger = {
    selectAll: function(callback) {
        orm.selectAll('burgers',function(result) {
            callback(result);
        });
    },

    insertOne: function(columns,values,callback) {
        orm.insertOne("burgers",columns,values,function(result) {
            callback(result);
        });
    },

    updateOne: function(objValues,selectWhere,callback) {
        orm.updateOne("burgers",objValues,selectWhere,function(result) {
            callback(result);
        });
    }
};


// exporting burger orm for use
module.exports = burger;