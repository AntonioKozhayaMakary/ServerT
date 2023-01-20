const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customerSchema = new Schema({
  CustomerName: {
    type: String,
    required: true
  },
  CustomerPhoneNumber: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Customer', customerSchema)