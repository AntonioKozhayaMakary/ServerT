const Category = require('../models/categoryModel')
const mongoose = require('mongoose')

// get all Category
const getCategorys = async (req, res) => {
  const categorys = await Category.find({}).sort({ createdAt: -1 })
  res.status(200).json(categorys)
}

// get a single Category
const getCategory = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Category' })
  }

  const Category = await Category.findById(id)

  if (!Category) {
    return res.status(404).json({ error: 'No such Category' })
  }

  res.status(200).json(Category)
}




// create a new Category
const createCategory = async (req, res) => {
  const { CategoryName } = req.body

  // add to the database
  try {
    const category = await Category.create({ CategoryName })
    res.status(200).json(category)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a category
const deleteCategory = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such category' })
  }

  const category = await Category.findOneAndDelete({ _id: id })

  if (!category) {
    return res.status(400).json({ error: 'No such category' })
  }

  res.status(200).json(category)
}

// update a category
const updateCategory = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such category'})
  }

  const category = await Category.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!category) {
    return res.status(400).json({error: 'No such category'})
  }

  res.status(200).json(category)
} 

module.exports = {
  getCategorys,
  getCategory,
  updateCategory,
  deleteCategory,
  createCategory
}