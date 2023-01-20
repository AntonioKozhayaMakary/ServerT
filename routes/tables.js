const express = require('express')
const {
  getTables,
  getTable, 
  createTable,
  deleteTable, 
  updateTable
} = require('../controllers/TableController')

const router = express.Router()

// GET all Tables
router.get('/', getTables)

// GET a single Table
router.get('/:id', getTable)

// POST a new Table
router.post('/', createTable)

// DELETE a Table
router.delete('/:id', deleteTable)

// UPDATE a Table
router.patch('/:id', updateTable)

module.exports = router