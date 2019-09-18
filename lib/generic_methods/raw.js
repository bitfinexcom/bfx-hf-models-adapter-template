'use strict'

/**
 * Provides access to the underlying DB object for custom queries
 *
 * @param {Object} DB
 * @param {Object} model
 * @param {Function} cb - must return a promise
 * @return {Promise} p - promise returned by cb()
 */
module.exports = async (db, model, cb) => {
  return cb(db, model)
}
