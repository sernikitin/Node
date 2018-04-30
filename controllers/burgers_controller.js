var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
})
router.post("/add", function (req, res) {
    // console.log("add was clicked ")
    // console.log(req.body.burger_name)
    // console.log("bla lba")
    burger.insertNewBurger(req.body.burger_name, function () {
        res.redirect("/")
    });


})
router.put("/api/update/:id", function (req, res) {
    //orm.selectAll();

})


module.exports = router