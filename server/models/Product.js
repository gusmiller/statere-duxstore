/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: Product.js
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
     name: {
          type: String,
          required: true,
          trim: true
     },
     description: {
          type: String
     },
     image: {
          type: String
     },
     price: {
          type: Number,
          required: true,
          min: 0.99
     },
     quantity: {
          type: Number,
          min: 0,
          default: 0
     },
     category: {
          type: Schema.Types.ObjectId,
          ref: 'Category',
          required: true
     }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
