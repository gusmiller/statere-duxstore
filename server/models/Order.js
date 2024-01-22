/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: Order.js
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
     purchaseDate: {
          type: Date,
          default: Date.now
     },
     products: [
          {
               type: Schema.Types.ObjectId,
               ref: 'Product'
          }
     ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
