
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TeacherSubjectBatch = new Schema({
    teacher: {
        type: Schema.Types.ObjectId, required: true, ref: 'Teacher'
    },
    subject: {
        type: Schema.Types.ObjectId, required: true, ref: 'Subject'
    },
    batch: {
        type: Schema.Types.ObjectId, required: true, ref: 'Batch'
    }
}); 

module.exports = mongoose.model("TeacherSubjectBatch", TeacherSubjectBatch);