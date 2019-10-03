// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    // Select All
    selectAll: function(cb){
        orm.selectAll('burgers', cb);
    },
    // Insert
    insertOne: function(name, cb) {
        orm.insertOne('burgers', ['burger_name'],name, cb,);
    },
    // Update
    updateOne: function(col, val, id, cb) {
        orm.updateOne('burgers', col, val, id, cb);
    }
}


// * Export at the end of the `burger.js` file.
module.exports = burger;