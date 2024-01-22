/*******************************************************************
 * Carleton Bootcamp - 2024
 * Copyright 2024 Carleton University - refactored by Gustavo Miller
 * License: free and unencumbered software
 * Assignment # 22 - State: Redux Store
 * 
 * Filename: cleanDB.js
 * Date : 1/22/2024 6:03:40 PM
 *******************************************************************/const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
     try {
          let modelExists = await models[modelName].db.db.listCollections({
               name: collectionName
          }).toArray()

          if (modelExists.length) {
               await db.dropCollection(collectionName);
          }
     } catch (err) {
          throw err;
     }
}
