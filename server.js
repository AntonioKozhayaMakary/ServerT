require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const productRoutes = require('./routes/products')
const orderRoutes = require('./routes/orders')
const categoryRoutes = require('./routes/category')
const tableRoutes = require('./routes/tables')
const supplierRoutes = require('./routes/suppliers')
const customerRoutes = require('./routes/customers')

//const path = require('path');
const cors = require('cors');


// express app
const app = express()
app.use(cors());
// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})


// routes
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/categorys', categoryRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/tables', tableRoutes)
app.use('/api/suppliers', supplierRoutes)


//app.get('/', (req, res) => { res.send('Hello from Express!')});

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database !')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 


