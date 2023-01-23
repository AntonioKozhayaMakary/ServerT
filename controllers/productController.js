const Product = require('../models/productModel')
const mongoose = require('mongoose')

// get all Product
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 })
  res.status(200).json(products)
}

// get a single Product
const getProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Product' })
  }

  const Product = await Product.findById(id)

  if (!Product) {
    return res.status(404).json({ error: 'No such Product' })
  }

  res.status(200).json(Product)
}




// create a new Product
const createProduct = async (req, res) => {
  const { Title ,  CategoryName ,Quantity , Price ,TotalPrice  } = req.body


  // add to the database
  try {
    const product = await Product.create({ Title ,  CategoryName ,Quantity , Price ,TotalPrice   })
    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a product
const deleteProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such product' })
  }

  const product = await Product.findOneAndDelete({ _id: id })

  if (!product) {
    return res.status(400).json({ error: 'No such product' })
  }

  res.status(200).json(product)
}

// update a product
const updateProduct = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such product'})
  }

  const product = await Product.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!product) {
    return res.status(400).json({error: 'No such product'})
  }

  res.status(200).json(product)
} 

module.exports = {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct
}