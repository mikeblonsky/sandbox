const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    req.status(200).json({
        message: "Handling GET"
    })
});