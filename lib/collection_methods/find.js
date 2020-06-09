'use strict'

/**
 * Queries a collection for records matching a set of criteria
 *
 * @memberof COLLECTION_METHODS
 *
 * @param {object} db - db instance
 * @param {bfx-hf-models.Model} model - model instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - array of criteria
 *   which must be met for a record to be included in the results
 * @returns {Promise} p - resolves to array of matching records
 */
const find = async (db, model, criteria = []) => []

module.exports = find
