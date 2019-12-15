var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Teacher = new Schema({
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    }
}); 

module.exports = mongoose.model("Teacher", Teacher);