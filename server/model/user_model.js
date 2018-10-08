var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    multi: Array,
    userName: String
});

module.exports = mongoose.model('User', UserSchema, "users");