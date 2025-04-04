require('dotenv').config();
const express = require('express');
const cors = require('cors');
const colors = require('colors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();

connectDB(); 

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`.green.bold);
});