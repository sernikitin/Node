var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function (req, res) {
    res.redirect("/burgers")

})

router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
})
router.post("/burgers/add", function (req, res) {
    // console.log("add was clicked ")
    // console.log(req.body.burger_name)
    burger.insertNewBurger(req.body.burger_name, function () {
        res.redirect("/burgers")
    });
})
router.post('/burgers/toDelete/:id', function (req, res) {

    console.log(req.body.toDelete)
    console.log(req.params.id)
    res.redirect("/burgers")
})
module.exports = router