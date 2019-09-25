// Setup MySQL Connection
var sql = require('mysql');

// IMPORTANT: PASSWORDS
// **********************************
// **********************************
// Passwords File
var keys = require('./password.js');
// My SQL Password
var password = keys.SQLPassword;
// **********************************
// **********************************

var connection = mysql.createconnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password
})

// Export connection for our ORM to use.
module.exports = connection;
