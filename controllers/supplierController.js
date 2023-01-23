const Supplier = require('../models/supplierModel')
const mongoose = require('mongoose')

// get all Supplier
const getSuppliers = async (req, res) => {
  const suppliers = await Supplier.find({}).sort({ createdAt: -1 })
  res.status(200).json(suppliers)
}

// get a single Supplier
const getSupplier = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Supplier' })
  }

  const Supplier = await Supplier.findById(id)

  if (!Supplier) {
    return res.status(404).json({ error: 'No such Supplier' })
  }

  res.status(200).json(Supplier)
}




// create a new Supplier
const createSupplier = async (req, res) => {
  const { Name , PhoneNumber } = req.body

  // add to the database
  try {
    const supplier = await Supplier.create({Name , PhoneNumber })
    res.status(200).json(supplier)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a supplier
const deleteSupplier  = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No such supplier' })
  }

  const supplier = await Supplier.findOneAndDelete({ _id: id })

  if (!supplier) {
    return res.status(400).json({ error: 'No such supplier' })
  }

  res.status(200).json(supplier)
}

// update a supplier
const updateSupplier = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such supplier'})
  }

  const supplier = await Supplier.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!supplier) {
    return res.status(400).json({error: 'No such supplier'})
  }

  res.status(200).json(supplier)
} 

module.exports = {
    getSupplier,
    getSuppliers,
    deleteSupplier,
    updateSupplier,
    createSupplier
}