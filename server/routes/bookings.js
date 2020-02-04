var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");

var db = mongojs("mongodb://127.0.0.1:27017/project_db", ["users"]);


router.get("/bookings", function (req, res, next) {

    db.users.find(function (err, todos) {

        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });    // res.send("Booking routes");

});




module.exports = router;