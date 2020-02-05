const express = require('express');
const app = express();
const leaveFormRoute = express.Router();

// LeveForm model
let LeaveForm = require('../models/LeaveForm');

// Add Leave Form
leaveFormRoute.route('/create').post((req, res, next) => {
    LeaveForm.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });

// Get All Leave Forms
leaveFormRoute.route('/').get((req, res) => {
    LeaveForm.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Get single leave form
leaveFormRoute.route('/read/:id').get((req, res) => {
  LeaveForm.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

  module.exports = leaveFormRoute;