/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: Category.js
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
     name: {
          type: String,
          required: true,
          trim: true
     }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
