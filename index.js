'use strict'

const mapMethods = require('./lib/map_methods')
const genericMethods = require('./lib/generic_methods')
const collectionMethods = require('./lib/collection_methods')

/**
 * DB init method; can take any arguments, but must return the example object
 * structure.
 *
 * @return {Object} hfDBAdapter
 */
module.exports = () => {
  return {
    db: {}, // DB object provided to all methods
    name: 'template',
    close: () => {}, // should close the DB connection
    mapMethods,
    collectionMethods,
    genericMethods
  }
}
