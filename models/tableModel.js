const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tableSchema = new Schema({
    
    TableNumber: {
        type: Number,
        required: true
      },
    }, { timestamps: true })

module.exports = mongoose.model('Table', tableSchema)