const express = require('express');
const app = express();
const holidayFormRoute = express.Router();

// Holiday model
let HolidayForm = require('../models/Holiday');

// Add holiday
holidayFormRoute.route('/create').post((req, res, next) => {
    HolidayForm.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });

// Get All holidays
holidayFormRoute.route('/').get((req, res) => {
    HolidayForm.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Get single holiday
holidayFormRoute.route('/read/:id').get((req, res) => {
    HolidayForm.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

  module.exports = holidayFormRoute;