'use strict'

const mapMethods = require('./map_methods')
const genericMethods = require('./generic_methods')
const collectionMethods = require('./collection_methods')

/**
 * DB init method; can take any arguments, but must return the example object
 * structure.
 *
 * @private
 *
 * @returns {bfx-hf-models.DBAdapter} adapter
 */
const AdapterGenerator = () => ({
  db: {}, // DB object provided to all methods
  name: 'template',
  close: () => {}, // should close the DB connection
  mapMethods,
  collectionMethods,
  genericMethods
})

module.exports = AdapterGenerator
