const Table = require('../models/tableModel')
const mongoose = require('mongoose')

// get all Table
const getTables = async (req, res) => {
  const tables = await Table.find({}).sort({ createdAt: -1 })
  res.status(200).json(tables)
}

// get a single Table
const getTable = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Table' })
  }

  const Table = await Table.findById(id)

  if (!Table) {
    return res.status(404).json({ error: 'No such Table' })
  }

  res.status(200).json(Table)
}




// create a new Table
const createTable = async (req, res) => {
  const { TableNumber } = req.body

  
  // add to the database
  try {
    const table = await Table.create({ TableNumber })
    res.status(200).json(table)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a table
const deleteTable  = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such table' })
  }

  const table = await Table.findOneAndDelete({ _id: id })

  if (!table) {
    return res.status(400).json({ error: 'No such table' })
  }

  res.status(200).json(table)
}

// update a table
const updateTable = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such table'})
  }

  const table = await Table.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!table) {
    return res.status(400).json({error: 'No such table'})
  }

  res.status(200).json(table)
} 

module.exports = {
    getTable,
    getTables,
    deleteTable,
    updateTable,
    createTable
}