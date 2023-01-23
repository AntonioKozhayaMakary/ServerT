const Order = require('../models/orderModel')
const mongoose = require('mongoose')

// get all Order
const getOrders = async (req, res) => {
  const orders = await Order.find({}).sort({ createdAt: -1 })
  res.status(200).json(orders)
}

// get a single Order
const getOrder = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Order' })
  }

  const Order = await Order.findById(id)

  if (!Order) {
    return res.status(404).json({ error: 'No such Order' })
  }

  res.status(200).json(Order)
}




// create a new Order
const createOrder = async (req, res) => {
  const { TotalPriceLebanese , DollarRate , TableNumber 
    ,TotalPriceUSD, CartsRecent } = req.body

  // add to the database
  try {
    const order = await Order.create({ TotalPriceLebanese , DollarRate , TableNumber 
      ,TotalPriceUSD, CartsRecent })
    res.status(200).json(order)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a order
const deleteOrder  = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such order' })
  }

  const order = await Order.findOneAndDelete({ _id: id })

  if (!order) {
    return res.status(400).json({ error: 'No such order' })
  }

  res.status(200).json(order)
}

// update a order
const updateOrder = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such order'})
  }

  const order = await Order.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!order) {
    return res.status(400).json({error: 'No such order'})
  }

  res.status(200).json(order)
} 

module.exports = {
    getOrder,
    getOrders,
    deleteOrder,
    updateOrder,
    createOrder
}