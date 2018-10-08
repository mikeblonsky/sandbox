const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
const app_config = require("./config/app_config");

// ROUTES
const sportsRoute = require("./routes/sports_route");
const carsRoute = require("./routes/cars_route");

// DATABASE CONNECT
mongoose.connect(app_config.mongoURI)
    .then(() => console.log("MongoDB Connected!!!"))
    .catch(err => console.log("MongoDB Connection Error !!!!"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// USE ROUTE
app.use(`${app_config.url}/sports/`, sportsRoute);
// sports/all GET
// sports/add POST
// sports/single/:id GET
// sports/update/:id PUT
// sports/delete/:id DELETE

app.use(`${app_config.url}/cars/`, carsRoute);




app.listen(3000);