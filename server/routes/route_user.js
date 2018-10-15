const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../model/model_user");

router.post("/", (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        console.log("user", user);
        if (user.length >= 1) {
            return res.status(422).json({
                "message": "Email exist"
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    console.log("ERR", err);
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    console.log("ROUTE 11111111: ", req.body, hash);
                    new User({
                        email: req.body.email,
                        password: hash
                    })
                    .save()
                    .then(result => {
                        console.log("/signup result: ", result);
                        res.status(201).json({
                            message: "user created"
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
                }
            })
        }
    })
});

router.delete("/remove/:userId", (req, res, next) => {
    User.findOneAndRemove({_id: req.params.userId})
        .exec()
        .then(result => {
            res.status(200).json({
                "message": "User deleted"
            });
        })
        .catch(err => {
            console.log("ERR DELETE: ", err);
            res.status(500).json({
                error: err
            })
        });
})


module.exports = router;