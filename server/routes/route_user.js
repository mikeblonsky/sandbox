const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app_config = require("../config/app_config");
const jwt = require("jsonwebtoken");

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
                    new User({
                        _id: new mongoose.Types.ObjectId(),
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


router.post("/login", (req, res, next) => {
    User.find({email: req.body.email})
        .exec()
        .then(user => {
            console.log("user login: ", user);
            if (user.length < 1) {
                return res.status(401).json({
                    "message": "Auth failed"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        "message": "Auth failed"
                    });
                }
                if (result) {
                    console.log(user[0].email, user[0]._id);
                    console.log("YEEEEEE", result);

                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        }, 
                        app_config.JWT_KEY, 
                        {
                            expiresIn: "1h"
                        }
                    );

                    return res.status(200).json({
                        "message": "Auth successful",
                        "token": token
                    });
                }
                res.status(401).json({
                    "message": "Auth failed"
                });
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
})

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