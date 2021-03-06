var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');

var index = require('./routes/index');
var apis = require('./routes/bookings');

var app = express();
var port = 3000;

app.listen(port, function () {
    console.log("Server running on port", port);

});

//views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
//routes

app.use("/api", apis);
