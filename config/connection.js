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
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ', err.stack);
        return;
    }
    console.log('connected as id: ', connection.threadId)
});

// Export connection for our ORM to use.
module.exports = connection;
