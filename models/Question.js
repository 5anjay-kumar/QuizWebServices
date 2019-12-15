
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = new Schema({
    text: {
        type: String, required: true
    },
    image: {
        type: String, required: false
    },
    type: {
        type: String, required: true
    },
    Quiz: {
        type: Schema.Types.ObjectId, required: true, ref: 'Quiz'
    }
}); 

module.exports = mongoose.model("Question", Question);