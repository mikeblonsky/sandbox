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
const User = db.model('Users', userSchema, "users");

const SportsSchema = new Schema({
    name: String,
    sureName: String,
    xxx: String
});
const Sports = db.model('Sports', SportsSchema, "sports");

app.post("/api/add_sports", function(req, res) {
    console.log("SERVER POST XXX");
    new Sports({name: "moje name", sureName: "moje sureName"})
        .save()
        .then(xxx => done(null, xxx));
});

app.get("/api/fetch_sports", function(req, res) {
    Sports.find()
        .then(sport => {
           console.log("NODE fetchUsers", sport);
           res.send(sport);
        }).catch(err => {
            res.status(500).send({
            message: err.message
        });
    });
})
app.get("/api/fetch_sports/:id", function(req, res) {
    Sports.findOne({_id: req.params.id})
        .then(singleSport => {
           console.log("FETCH SINGLE SPORT: ", singleSport);
            res.send(singleSport);
        }).catch(err => {
            res
                .status(500)
                .send({
                    message: err.message
                });
    });
})
app.put("/api/fetch_sports/:id", function(req, res) {
    console.log("PUTTTTTTTTTTTTTTTTTT", req.params);
    Sports.findOneAndUpdate(
        { _id: req.params.id },
        { $set: 
            {...req.body}
        }
    )
    .then(singleSport => {
        console.log("FETCH SINGLE SPORT: ", singleSport);
        res.send(singleSport);
    }).catch(err => {
        res
            .status(500)
            .send({
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