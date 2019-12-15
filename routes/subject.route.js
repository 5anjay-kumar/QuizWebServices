const express = require('express');
const app = express();
const subjectRoute = express.Router();

// Subject model
let Subject = require('../models/Subject');

// Get All Subject
subjectRoute.route('/admin/subjects').get((req, res) => {
    Subject.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

/////////////////////////////////////////////////////
// Add Subject
subjectRoute.route('/admin/subjects').post((req, res, next) => {
  console.log(req);
  Subject.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});

// Update Subject
subjectRoute.route('/admin/subjects/:id').put((req, res, next) => {
    Subject.findByIdAndUpdate(req.params.id, {
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

// Get single Subject
// subjectRoute.route('/read/:id').get((req, res) => {
//     Subject.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })




// Delete Subject
// subjectRoute.route('/delete/:id').delete((req, res, next) => {
//     Subject.findOneAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = subjectRoute;