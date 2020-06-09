'use strict'

/**
 * Updates a record by ID
 *
 * @memberof MAP_METHODS
 *
 * @param {object} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {object|string|number} docOrID - record to update or its ID
 * @param {object} value - new data for the record
 * @returns {Promise} p - resolves to number of updated rows (always 1)
 */
const update = async (db, model, docOrID, value) => 1

module.exports = update
