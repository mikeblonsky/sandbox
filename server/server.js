const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
const app_config = require("./config/app_config");

mongoose.connect(app_config.mongoURI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



const userSchema = new Schema({
    multi: Array,
    userName: String
});
const User = db.model('users', userSchema);

const xxxSchema = new Schema({
    name: String,
    sureName: String
});
const Xxx = db.model('xxx', xxxSchema);

app.post("/api/addxxx", function(req, res) {
    console.log("SERVER POST XXX");
    new Xxx({name: "moje name", sureName: "moje sureName"})
        .save()
        .then(xxx => done(null, xxx));
});

app.get("/api/fetchxxx", function(req, res) {
    Xxx.find()
        .then(xxx => {
           console.log("NODE fetchUsers", xxx);
           res.send(xxx);
        }).catch(err => {
            res.status(500).send({
            message: err.message
        });
    });
})
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
        multi: req.body.multi, 
        userName: req.body.userName
    })
    .save()
    .then(user => done(null, user));
});




app.listen(3000);