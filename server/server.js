const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");
const app_config = require("./config/app_config");

// ROUTES
const sportsRoute = require("./routes/sports_route");
const carsRoute = require("./routes/cars_route");
const userRoute = require("./routes/route_user");

// DATABASE CONNECT
mongoose.connect(app_config.mongoURI)
    .then(() => console.log("MongoDB Connected!!!"))
    .catch(err => console.log("MongoDB Connection Error !!!!"));
    
// // USE CORS
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.urlencoded());
// app.use(express.json());

app.use("/uploads", express.static("uploads"));

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });


// USE ROUTE
app.use(`${app_config.url}/cars/`, carsRoute);
app.use(`${app_config.url}/sports/`, sportsRoute);
app.use(`${app_config.url}/signup/`, userRoute);


app.listen(3000);