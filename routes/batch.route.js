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

/////////////////////////////////////////////////////
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
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})


// Get single Batch
// batchRoute.route('/read/:id').get((req, res) => {
//     Batch.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// Delete Batch
// batchRoute.route('/delete/:id').delete((req, res, next) => {
//     Batch.findOneAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = batchRoute;