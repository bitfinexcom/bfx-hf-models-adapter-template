'use strict'

/**
 * Must return all documents that match the specified criteria, within the
 * defined range. For criteria format, see find()
 *
 * @param {Object} db
 * @param {Object} model
 * @param {Array[]} criteria
 * @param {Object} range
 * @param {string} range.key
 * @param {number} range.start
 * @param {number} range.end
 * @return {Promise} p - resolves to array
 */
module.exports = async (db, model, criteria, { key, start, end }) => {
  return []
}
