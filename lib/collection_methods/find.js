'use strict'

/**
 * Must return all matching documents for the specified criteria. Criteria are
 * specified in the format [[key, comparator, value], ...], where the
 * comparator is one of '=', '!=', '<', '<=', '>', or '>='
 *
 * @param {Object} db
 * @param {Object} model
 * @param {Array[]} criteria
 * @return {Promise} p - resolves to array
 */
module.exports = async (db, model, criteria = []) => {
  return []
}
