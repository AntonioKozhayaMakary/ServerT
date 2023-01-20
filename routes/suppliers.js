const express = require('express')
const {
  getSuppliers,
  getSupplier, 
  createSupplier,
  deleteSupplier, 
  updateSupplier
} = require('../controllers/SupplierController')

const router = express.Router()

// GET all Suppliers
router.get('/', getSuppliers)

// GET a single Supplier
router.get('/:id', getSupplier)

// POST a new Supplier
router.post('/', createSupplier)

// DELETE a Supplier
router.delete('/:id', deleteSupplier)

// UPDATE a Supplier
router.patch('/:id', updateSupplier)

module.exports = router