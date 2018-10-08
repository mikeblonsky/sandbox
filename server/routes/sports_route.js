const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Sports = require("../model/sports_model");

router.get("/all", (req, res) => {
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

router.post("/add", function(req, res) {
    console.log("SERVER POST XXX");
    new Sports({name: "moje name", sureName: "moje sureName"})
        .save()
        .then(xxx => done(null, xxx));
});


router.get("/single/:id", function(req, res) {
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


router.put("/update/:id", function(req, res) {
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


router.delete("/delete/:id", function(req, res) {
    console.log("DELETEEEEEEEEEEEEE", req.params);
    Sports.findOneAndRemove({ _id: req.params.id }).then(singleSport => {
        console.log("FETCH SINGLE SPORT: ", singleSport);
        res.send(singleSport);
    }).catch(err => {
        res
            .status(204)
            .send({
                message: err.message
            });
    });
})

module.exports = router;