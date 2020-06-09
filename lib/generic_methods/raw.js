'use strict'

/**
 * Executes a database query
 *
 * @memberof GENERIC_METHODS
 *
 * @param {object} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {Function} cb - called with `(db, model)`, must return a promise
 * @returns {Promise} p - as returned by the callback `cb`
 */
const raw = async (db, model, cb) => cb(db, model)

module.exports = raw
