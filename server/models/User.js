/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: User.js
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/
const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
     firstName: {
          type: String,
          required: true,
          trim: true
     },
     lastName: {
          type: String,
          required: true,
          trim: true
     },
     email: {
          type: String,
          required: true,
          unique: true
     },
     password: {
          type: String,
          required: true,
          minlength: 5
     },
     orders: [Order.schema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
     if (this.isNew || this.isModified('password')) {
          const saltRounds = 10;
          this.password = await bcrypt.hash(this.password, saltRounds);
     }

     next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
     return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
