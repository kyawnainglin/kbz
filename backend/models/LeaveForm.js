const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let LeaveForm = new Schema({
   name: {
      type: String,
      required: true
   },
   leaveType: {
      type: String,
      required: true
   },
   leaveDate: {
      year: Number,
      month: Number,
      day: Number
   },
}, 
{
   collection: 'leaveForms'
})

module.exports = mongoose.model('LeaveForm', LeaveForm)