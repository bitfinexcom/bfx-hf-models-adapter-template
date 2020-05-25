'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~update}
 *
 * @memberof module:bfx-hf-models-adapter-template
 * @private
 * @async
 *
 * @param {object} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {module:bfx-hf-models.DBAdapterCriteria[]} criteria - array of
 *   criteria to be met for a record to be updated
 * @param {object} data - data to saved on matching records; partial update
 * @returns {number} nModified - number of modified records
 */
const update = async (db, model, criteria = [], data) => {
  return {}
}

module.exports = update
