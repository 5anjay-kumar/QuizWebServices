
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Subject = new Schema({
    subject_title: {
        type: String, required: true
    }
}); 

module.exports = mongoose.model("Subject", Subject);