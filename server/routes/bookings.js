

var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mongodb://127.0.0.1:27017/project_db", ["users"]);
var query = { password: "osama" };
var check = "Nooo";
router.get("/bookings", function (req, res) {


    //console.log(req.body.email_data);
    // db.users.find(query).toArray(function (err, todos) {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.send(todos);
    //     }
    // });

});

router.post("/add", function (req, res) {
    console.log(req.body.email);
});




module.exports = router;