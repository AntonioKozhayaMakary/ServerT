const express = require('express')
const {
  getCustomers,
  getCustomer, 
  createCustomer,
  deleteCustomer, 
  updateCustomer
} = require('../controllers/CustomerController')

const router = express.Router()

// GET all Customers
router.get('/', getCustomers)

// GET a single Customer
router.get('/:id', getCustomer)

// POST a new Customer
router.post('/', createCustomer)

// DELETE a Customer
router.delete('/:id', deleteCustomer)

// UPDATE a Customer
router.patch('/:id', updateCustomer)

module.exports = router