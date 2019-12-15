
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Student = new Schema({
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
    },
    batch: {
        type: Schema.Types.ObjectId, required: true, ref: 'Batch'
    }
}); 

module.exports = mongoose.model("Student", Student);