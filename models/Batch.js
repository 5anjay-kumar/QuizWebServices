
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Batch = new Schema({
    department: {
        type: String, required: true
    },
    batch_year: {
        type: String, required: true
    },
    section: {
        type: String, required: true
    }
}); 

module.exports = mongoose.model("Batch", Batch);