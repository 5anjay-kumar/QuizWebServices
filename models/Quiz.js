
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Quiz = new Schema({
    title: { type: String, required: true }, time: {
        type: String, required: true
    },
    status: {
        type: String, required: true
    },
    TeacherSubjectBatch: {
        type: Schema.Types.ObjectId, required: true, ref: 'TeacherSubjectBatch'
    }
}); 

module.exports = mongoose.model("Quiz", Quiz);