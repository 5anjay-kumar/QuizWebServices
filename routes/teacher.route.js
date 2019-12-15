const express = require('express');
const app = express();
const mongoose = require("mongoose");
const teacherRoute = express.Router();

// Teacher model
let Teacher = require('../models/Teacher');
let TeacherSubjectBatch = require("../models/TeacherSubjectBatch");

// Get All Teachers
teacherRoute.route('/admin/teachers').get((req, res) => {
  Teacher.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Add Teacher
teacherRoute.route('/admin/teachers').post((req, res, next) => {
  Teacher.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

teacherRoute.route('/admin/teachers/:id/subjects').get((req, res) => {
  TeacherSubjectBatch.find({ teacher: mongoose.Types.ObjectId(req.params.id) }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  }).populate([{ path: 'teacher' }, { path: 'subject' }, { path: 'batch' }])
    .exec(function (err, data) {
      // console.log(data);
    });
});

teacherRoute.route('/admin/teachers/subjects').post((req, res, next) => {
  TeacherSubjectBatch.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

teacherRoute.route('/admin/teachers/subjects/:id').put((req, res, next) => {
  TeacherSubjectBatch.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Update teacher
teacherRoute.route('/admin/teachers/:id').put((req, res, next) => {
  Teacher.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete teacher
teacherRoute.route('/admin/teachers/:id').delete((req, res, next) => {
    Teacher.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = teacherRoute;