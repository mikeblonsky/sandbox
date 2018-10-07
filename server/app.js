const express = require('express');
const app = express();

const productRoutes = require("./api/routes/products");

app.use((request, response, next) => {
    response.status(200).json({
        message: "It works!"
    })
})