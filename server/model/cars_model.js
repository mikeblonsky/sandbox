var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarsSchema = new Schema({
    name: String,
    year: Number
});

module.exports = mongoose.model('Cars', CarsSchema, "cars");