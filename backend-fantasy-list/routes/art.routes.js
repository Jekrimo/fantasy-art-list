const express = require('express');
const app = express();

const artRoutes = express.Router();
let Art = require('../model/artwork');

// Add Book
artRoutes.route('/add-art').post((req, res, next) => {
    Art.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all Book
artRoutes.route('/').get((req, res) => {
    Art.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Book
artRoutes.route('/get-art/:id').get((req, res) => {
    Art.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Book
artRoutes.route('/update-art/:id').put((req, res, next) => {
    Art.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('art updated successfully!')
    }
  })
})

// Delete Book
artRoutes.route('/delete-art/:id').delete((req, res, next) => {
    Art.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = artRoutes;
