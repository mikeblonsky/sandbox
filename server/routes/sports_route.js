const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const multipart = require("connect-multiparty");
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./uploads/");
    },
    filename: function(req, file, callback) {
        callback(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});
const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null, true);
    } else {
        callback(null, false);
    }
}
const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});


const Sports = require("../model/sports_model");


// GET     /api/sports/all 
// POST    /api/sports/add 
// GET     /api/sports/single/:id 
// PUT     /api/sports/update/:id 
// DELETE  /api/sports/delete/:id 

router.get("/all", (req, res) => {
    Sports.find()
        .then(sport => {
           res.send(sport);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message
        });
    });
})

router.post("/add", upload.single("productImage"), (req, res, done) => {
    console.log("FILE: ", req.body ,"222222222", req.file);
    const xxx = JSON.stringify(req.body.data);
    console.log("xxx", xxx);
    new Sports({
        name: "req.body.name", 
        sureName: "req.body.sureName", 
        productImage: req.file.path
    })
    .save()
    .then(xxx => {
        console.log("XXX", xxx);
        done(null, xxx)
    });
});

router.get("/single/:id", function(req, res) {
    Sports.findOne({_id: req.params.id})
        .then(singleSport => {
            res.send(singleSport);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
    });
})

router.put("/update/:id", function(req, res) {
    Sports.findOneAndUpdate(
        { _id: req.params.id },
        { $set: 
            {...req.body}
        }
    )
    .then(singleSport => {
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
    Sports.findOneAndRemove(
        { _id: req.params.id }
    )
    .then(singleSport => {
        res.send(singleSport);
    }).catch(err => {
        res.status(204).send({
            message: err.message
        });
    });
})

module.exports = router;