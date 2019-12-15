
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StudentAnswer = new Schema({
    is_matched: {
        type: Boolean, required: true
    },
    Student: {
        type: Schema.Types.ObjectId, required: true, ref: 'Student'
    },
    QuestionOption: {
        type: Schema.Types.ObjectId, required: true, ref: 'QuestionOption'
    }
}); 

module.exports = mongoose.model("StudentAnswer", StudentAnswer);