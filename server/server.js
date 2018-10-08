const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
const app_config = require("./config/app_config");

// MODELS
const User = require("./model/user_model");

// ROUTES
const sportsRoute = require("./routes/sports_route");

//mongoose.Promise = global.Promise;
mongoose.connect(app_config.mongoURI)
    .then(() => console.log("MongoDB Connected!!!"))
    .catch(err => console.log("MongoDB Connection Error !!!!"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// USE ROUTE
app.use("/api/sports/", sportsRoute);


app.get("/api/fetchUsers", function(req, res) {
    console.log("Fetch all Users");
    User.find()
        .then(users => {
           console.log("NODE fetchUsers", users);
           res.send(users);
        }).catch(err => {
            res.status(500).send({
            message: err.message
        });
    });
})
app.post("/api/addUser", function(req, res) {
    console.log("SERVER POST ADD_USER", req.body);
    new User({
        ...req.body
    })
    .save()
    .then(user => done(null, user));
});




app.listen(3000);