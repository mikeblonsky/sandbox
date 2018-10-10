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

// DATABASE CONNECT
mongoose.connect(app_config.mongoURI)
    .then(() => console.log("MongoDB Connected!!!"))
    .catch(err => console.log("MongoDB Connection Error !!!!"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

// USE CORS
app.use(cors());

// USE ROUTE
app.use(`${app_config.url}/cars/`, carsRoute);
app.use(`${app_config.url}/sports/`, sportsRoute);



app.listen(3000);