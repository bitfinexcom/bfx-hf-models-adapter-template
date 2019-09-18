'use strict'

/**
 * Must fetch a document by either ID, or partial document for key generation
 *
 * @param {Object} db
 * @param {Object} model
 * @param {Function} model.mapKey - required method on map models for key gen
 * @param {Object|string} docOrID - document for key gen, or direct string ID
 * @return {Promise} p - resolves to document
 */
module.exports = async (db, model, docOrID) => {
  return {}
}
