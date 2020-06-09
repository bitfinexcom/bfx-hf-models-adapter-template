'use strict'

/**
 * Updates all records in a collection matching the specified criteria with the
 * provided data.
 *
 * @memberof COLLECTION_METHODS
 *
 * @param {object} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - array of criteria to
 *   be met for a record to be updated
 * @param {object} data - data to saved on matching records; partial update
 * @returns {Promise} p - resolves with the number of modified records
 */
const update = async (db, model, criteria = [], data) => 0

module.exports = update
