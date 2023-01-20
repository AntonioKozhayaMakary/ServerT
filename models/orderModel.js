const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
  CustomerName: {
    type: String,
    required: true
  },
  TotalPrice: {
    type: Number,
    required: true
  },
  TableNumber: {
    type: Number,
    required: true
  },
  CartsRecent:{
    type: Array,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)