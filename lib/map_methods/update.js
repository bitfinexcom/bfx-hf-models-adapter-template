'use strict'

/**
 * Must update a document by ID or partial document for key generation. If the
 * document does not exist, an error needs to be thrown.
 *
 * @param {Object} db
 * @param {Object} model
 * @param {Function} model.mapKey - required method on map models for key gen
 * @param {Object|string} docOrID - document for key gen, or direct string ID
 * @param {Object} doc - new document
 * @return {Promise} p - resolves to updated document
 */
module.exports = async (db, model, docOrID, value) => {
  return {}
}
