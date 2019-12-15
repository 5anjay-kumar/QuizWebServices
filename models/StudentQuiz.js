
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StudentQuiz = new Schema({
    status: {
        type: String, required: true
    },
    marks: {
        type: String, required: true
    },
    Quiz: {
        type: Schema.Types.ObjectId, required: true, ref: 'Quiz'
    },
    Student: {
        type: Schema.Types.ObjectId, required: true, ref: 'Student'
    }
}); 

module.exports = mongoose.model("StudentQuiz", StudentQuiz);