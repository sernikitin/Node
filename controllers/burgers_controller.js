var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get("/all", function(req, res){
    burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		res.render('index', hbsObject);
	});

})
router.post("/api/add", function(req, res){
    //orm.selectAll();

})
router.put("/api/update/:id", function(req, res){
    //orm.selectAll();

})


module.exports = router