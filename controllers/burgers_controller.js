var express = require("express");

var router = express.Router();

// Import the model
var burger = require("../models/burger.js");

// Routes:
// Select/Get All
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

// Insert
router.post('/api/burger', function(req, res) {
    burger.insertOne([
        'name', 'sleepy'
    ],[
        req.body.name, req.body.sleepy
    ], function(result){
        res.json({id: result.insertId});
    });
});

// Update
router.put('/api/burger/:id', function(req, res) {
    var condition = 'id = '+ req.params.id;

    console.log('consition: ', condition);

    burger.updateOne({
        sleepy: req.body.sleepy
    }, condition, function(result) {
        if(result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;