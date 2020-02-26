

var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mongodb://127.0.0.1:27017/project_db", ["users"]);

//api to check email and password validation
router.get("/verifylogin", function (req, res) {
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
                res.send("Login Failed!");
            }
            else {
                res.send("Login Successful!");
            }
        }
    });
});

//addding new user 
router.post("/signup", function (req, res) {

    var convert_reg_data = JSON.parse(JSON.stringify(req.body));
    var checkingemail = convert_reg_data.email;
    console.log(convert_reg_data.password);
    var checkemailquery = {
        email: checkingemail
    };
    db.users.find(checkemailquery).toArray(function (err, todos) {
        if (err) {
            res.send(err);
        } else {
            if (todos == "") {
                db.users.insert(req.body, function (err, res) {
                    if (err) throw err;
                    db.close();
                });
                console.log("Signup successful.");
            }
            else {
                console.log("Email already exists.");
            }
        }
    });
    // db.users.insert(req.body, function (err, res) {
    //     if (err) throw err;
    //     db.close();
    // });
});

module.exports = router;