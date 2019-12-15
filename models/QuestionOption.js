
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionOption = new Schema({
    text: {
        type: String, required: true
    },
    is_correct: {
        type: Boolean, required: true
    },
    Question: {
        type: Schema.Types.ObjectId, required: true, ref: 'Question'
    }
}); 

module.exports = mongoose.model("QuestionOption", QuestionOption);