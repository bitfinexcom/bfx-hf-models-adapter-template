'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~find}
 *
 * @memberof module:bfx-hf-models-adapter-template
 * @private
 * @async
 *
 * @param {object} db - db instance
 * @param {module:bfx-hf-models.Model} model - model instance
 * @param {module:bfx-hf-models.DBAdapterCriteria[]} criteria - array of
 *   criteria which must be met for a record to be included in the results
 * @returns {object[]} records - matching records
 */
const find = async (db, model, criteria = []) => {
  return []
}

module.exports = find
