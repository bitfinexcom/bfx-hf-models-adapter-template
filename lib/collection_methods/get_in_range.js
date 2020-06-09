'use strict'

/**
 * Queries records matching a set of criteria and a key in the specified range
 *
 * @memberof COLLECTION_METHODS
 *
 * @param {object} db - db instance
 * @param {bfx-hf-models.Model} model - model instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - criteria
 * @param {object} range - range definition
 * @param {string} range.key - key name on records to be checked against
 *   start/end limits
 * @param {number} range.start - minimum value for `range.key`
 * @param {number} range.end - maximum value for `range.key`
 * @param {object} [sort] - sort parameters
 * @param {string} [sort.orderBy] - key to sort results by
 * @param {string} [sort.orderDirection] - `'desc'` for descending results,
 *   otherwise ascending.
 * @returns {Promise} p - resolves to an array of matching records
 */
const getInRange = async (db, model, criteria, range, sort = {}) => []

module.exports = getInRange
