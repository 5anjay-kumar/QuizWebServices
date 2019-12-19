const express = require('express');
const app = express();
const batchRoute = express.Router();

// Batch model
let Batch = require('../models/Batch');

// Get All Batch
batchRoute.route('/admin/batches').get((req, res) => {
    Batch.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Add Batch
batchRoute.route('/admin/batches').post((req, res, next) => {
    Batch.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Update Batch
batchRoute.route('/admin/batches/:id').put((req, res, next) => {
    Batch.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

module.exports = batchRoute;