var multer = require('multer');
//store all incoming files
var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mongodb://127.0.0.1:27017/project_db", ["users"]);

//api to check email and password validation
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const filefilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Error message: '), false)
    }
}
var upload = multer({
    storage: storage
}, {
    filefilter: filefilter
});
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
router.post("/signup", upload.single('productImage'), function (req, res) {
    var convert_reg_data = JSON.parse(JSON.stringify(req.body));
    var checkingemail = convert_reg_data.email;
    var getpassword = convert_reg_data.password;
    //console.log(convert_reg_data.password);
    var checkemailquery = {
        email: checkingemail
    };
    db.users.find(checkemailquery).toArray(function (err, todos) {
        if (err) {
            res.send(err);
        } else {
            if (todos == "") {
                res.send("Signup successful.");
                db.users.insert({
                    email: checkingemail,
                    password: getpassword,
                    productImage: req.file.path
                }, function (err, res) {
                    if (err) throw err;
                })
                res.send("Signup successful!")
            }
            else {
                res.send("Email already exists.");
            }
        }
    });
});

module.exports = router;