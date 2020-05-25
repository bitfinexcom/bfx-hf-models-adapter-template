'use strict'

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~set}
 *
 * @memberof module:bfx-hf-models-adapter-template
 * @private
 * @async
 *
 * @param {object} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object} value - record value, containing relevant data for key
 *   generation. Any existing record with the same key will be overwritten.
 * @returns {object} record - final record value as stored in the DB
 */
const set = async (db, model, value) => {
  return {}
}

module.exports = set
