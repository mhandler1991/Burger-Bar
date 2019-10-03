// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {

    // Select/Query All Records Function
    selectAll: function (tableInput, cb) {
        console.log(tableInput);
        console.log(cb);
        var queryString = 'SELECT * FROM ??';
        console.log('Query: ', queryString);
        connection.query(queryString, [tableInput], cb);
    },
    //  ****************************

    // Insert new Record Function
    insertOne: function (tableInput, cols, name, cb) {

        // Log Values:
        console.log("Variables::");
        console.log(tableInput);
        console.log(cols);
        console.log(name);
        console.log(cb);

        var queryString = 'INSERT INTO Burger';

        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += cols;
        queryString += ') ';

        // Log Query:
        console.log('Query: ', queryString);

        connection.query(queryString, [cols,name], cb);
    },
    //  ****************************

    // Update a Burger
    updateOne: function (tableInput, col, val, id, cb){
        console.log(tableInput);
        console.log(col);
        console.log(val);
        console.log(id);
        console.log(cb);
        var queryString = 'UPDATE ${tableInput} SET ${col} = "${val}" WHERE id = "${id}" ';
        console.log(queryString);
        connection.query(queryString, cb);
    }

};

// EXPORT
module.exports = orm;