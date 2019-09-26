// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    // Select All
    selectAll: function(cb){
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    // Insert
    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res){
            cb(res);
        });
    },
    // Update
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res){
            cb(res);
        });
    }
}


// * Export at the end of the `burger.js` file.
module.exports = burger;