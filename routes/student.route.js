const express = require('express');
const app = express();
const mongoose = require("mongoose");
const studentRoute = express.Router();

// Subject model
let Student = require('../models/Student');
let Batch = require("../models/Batch");

// Get All Subject
studentRoute.route('/admin/students').get((req, res) => {
  Student.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  }).populate({ path: 'batch' })
    .exec(function (err, data) {
      // console.log(data);
    });
});

studentRoute.route('/admin/students/bybatch').get((req, res) => {
  console.log(req.query.batch);
  Student.find({ batch: mongoose.Types.ObjectId(req.query.batch) }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  }).populate({ path: 'batch' })
    .exec(function (err, data) {
      // console.log(data);
    });
});

/////////////////////////////////////////////////////
// Add Subject
studentRoute.route('/admin/students').post((req, res, next) => {
  Student.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Update Subject
studentRoute.route('/admin/students/:id').put((req, res, next) => {
  Student.findByIdAndUpdate(req.params.id, {
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

// Delete Subject
studentRoute.route('/admin/students/:id').delete((req, res, next) => {
  Student.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = studentRoute;