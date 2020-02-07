

var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mongodb://127.0.0.1:27017/project_db", ["users"]);
var query = { password: "osama" };
var check = "Nooo";
// router.get("/bookings", function (req, res) {
// });

router.get("/add", function (req, res) {
    var responsestring = JSON.parse(req.query.data);
    var getemail = responsestring.email;
    var getpassword = responsestring.password;
    var querystring = {
        $and: [
            { email: getemail }, { password: getpassword }
        ]
    };
    db.users.find(querystring).toArray(function (err, todos) {
        if (err) {
            res.send(error);
        } else {
            if (todos == "") {
                res.send("Login failed!");
            }
            else {
                res.send("Login succcessful!");
            }
        }
    });
});

module.exports = router;