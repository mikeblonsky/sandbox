const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
const app_config = require("./config/app_config");

//mongoose.Promise = global.Promise;
mongoose.connect(app_config.mongoURI);
const db = mongoose.connection;
// db.on('error', console.log('MongoDB connection error:'));

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
const User = mongoose.model('users', userSchema, "users");

const sportsSchema = new Schema({
    name: String,
    sureName: String
});
const Sport = mongoose.model('sport', sportsSchema, "sports");

app.post("/api/add_sport", function(req, res) {
    new Sport({
        name: "moje name", 
        sureName: "moje sureName"
    })
    .save()
    .then(sportItem => {
        console.log("SERVER POST sportItem", sportItem);
        done(null, sportItem)
    });
});

app.get("/api/fetch_sports", function(req, res) {
    Sport.find()
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
        ...req.body
    })
    .save()
    .then(user => done(null, user));
});

// db
//     .collection('users')
//     .findOne({
//         'username':username, 
//         'password':password
//     }, 
//         function(err, docs){
//         //do something
//         //do something
//         //do something
//     });


app.listen(3000);