const express = require('express')
const {
  getCategorys,
  getCategory, 
  createCategory,
  deleteCategory, 
  updateCategory
} = require('../controllers/CategoryController')

const router = express.Router()

// GET all Categorys
router.get('/', getCategorys)

// GET a single Category
router.get('/:id', getCategory)

// POST a new Category
router.post('/', createCategory)

// DELETE a Category
router.delete('/:id', deleteCategory)

// UPDATE a Category
router.patch('/:id', updateCategory)

module.exports = router