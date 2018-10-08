const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Cars = require("../model/cars_model");

router.get("/all", function(req, res) {
    Cars.find()
        .then(cars => {
           console.log("NODE fetchcars", cars);
           res.send(cars);
        }).catch(err => {
            res.status(500).send({
            message: err.message
        });
    });
})
router.post("/add", function(req, res) {
    new Cars({...req.body}).save().then(car => done(null, car));
});


module.exports = router;