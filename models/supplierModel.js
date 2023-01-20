const mongoose = require('mongoose')

const Schema = mongoose.Schema

const supplierSchema = new Schema({
    
    Name: {
        type: String,
        required: true
      },
      PhoneNumber: {
        type: String,
        required: true
      }
    }, { timestamps: true })

module.exports = mongoose.model('Supplier', supplierSchema)