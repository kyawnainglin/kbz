const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let HolidayForm = new Schema({
   name: {
      type: String,
      required: true
   },
   holidayDate: {
      year: Number,
      month: Number,
      day: Number
   },
}, 
{
   collection: 'holidayForms'
})

module.exports = mongoose.model('HolidayForm', HolidayForm)