const express = require('express')
const {
  createOrder,
  getOrder,
  getOrders,
  deleteOrder,
  updateOrder
} = require('../controllers/orderController')

const router = express.Router()

// GET all Orders
router.get('/', getOrders)

// GET a single Order
 router.get('/:id', getOrder)

// POST a new Order
router.post('/', createOrder)

// DELETE a Order
router.delete('/:id', deleteOrder)

// UPDATE a Order
router.patch('/:id', updateOrder) 

module.exports = router