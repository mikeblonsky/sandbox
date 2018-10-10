var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SportsSchema = new Schema({
    name: {
        type: String,
        // required: true,
        trim: true,
        //max: 10
    },
    sureName: {
        type: String,
        // required: true,
        trim: true,
        //max: 10
    },
    email: {
        type: String,
        // required: true,
        trim: true
    },
    productImage: {
        type: String
    }
});

module.exports = mongoose.model('Sport', SportsSchema, "sports");