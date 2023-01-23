const mongoose = require('mongoose')

const Schema = mongoose.Schema


const orderSchema = new Schema({
  TotalPriceLebanese: {
    type: Number,
    required: true
  },
  
  DollarRate: {
    type:Number,
    required: true 
  },
  TableNumber: {
    type: Number,
    required: true
  },
  TotalPriceUSD: {
    type: Number,
    required: true
  },
  CartsRecent: {
    type: Array,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)