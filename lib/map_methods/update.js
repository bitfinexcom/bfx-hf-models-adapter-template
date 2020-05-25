'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~update}
 *
 * @memberof module:bfx-hf-models-adapter-template
 * @private
 * @async
 *
 * @param {object} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object|string|number} docOrID - record to update or its ID
 * @param {object} value - new data for the record
 * @returns {number} nUpdatedRows - number of updated rows (always 1)
 */
const update = async (db, model, docOrID, value) => {
  return {}
}

module.exports = update
