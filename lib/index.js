'use strict'

const mapMethods = require('./map_methods')
const genericMethods = require('./generic_methods')
const collectionMethods = require('./collection_methods')

/**
 * DB init method; can take any arguments, but must return the example object
 * structure.
 *
 * @memberof module:bfx-hf-models-adapter-template
 *
 * @returns {module:bfx-hf-models.DBAdapter} adapter
 */
const AdapterGenerator = () => {
  /**
   * @type {module:bfx-hf-models.Model}
   * @memberof module:bfx-hf-models-adapter-template
   * @constant
   * @readonly
   */
  const TemplateAdapter = {
    db: {}, // DB object provided to all methods
    name: 'template',
    close: () => {}, // should close the DB connection
    mapMethods,
    collectionMethods,
    genericMethods
  }

  return TemplateAdapter
}

module.exports = AdapterGenerator
