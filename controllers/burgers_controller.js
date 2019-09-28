// REQUIREMENTS
// *****************************
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
// *****************************

// Routes:
// *****************************

// Select All
router.get('/', function (req, res) {
    burger.selectAll(function (err, data) {
        if (err) {
            console.error(err);
            throw err
        };
        console.log("GET DATA: ",data);
        res.render('index', {
            burgers: data
        });
    });
});

// Insert One
router.post('/api/burger', function (req, res) {
    burger.insertOne(req.body.name, function (err, data) {
        if (err) {
            console.error(err);
            throw err
        };
        console.log("INSERT DATA: ",data);
        res.sendStatus(200);
    });
});

// Update One
router.put('/api/burger/:id', function (req, res) {
    // Variables
    var col = req.body.col;
    var val = req.body.val;
    var id = req.params.id;

    burger.updateOne(col, val, id, function(err,data) {
        if (err) {
            console.error(err);
            throw err
        };
        console.log("UPDATE DATA: ", data);
        res.sendStatus(200);
    });

});

module.exports = router;