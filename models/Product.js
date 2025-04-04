const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre del producto es obligatorio'],
    trim: true,
    maxlength: [100, 'El nombre no puede exceder los 100 caracteres']
  },
  price: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo']
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
    trim: true
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    enum: ['electronics', 'clothing', 'food', 'books'],
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);