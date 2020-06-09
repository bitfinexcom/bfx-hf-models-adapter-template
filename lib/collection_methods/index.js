'use strict'

const find = require('./find')
const rmAll = require('./rm_all')
const getAll = require('./get_all')
const update = require('./update')
const insert = require('./insert')
const getInRange = require('./get_in_range')

/**
 * Methods that must be implemented for **collection** models
 */
const COLLECTION_METHODS = {
  find,
  rmAll,
  getAll,
  update,
  insert,
  getInRange
}

module.exports = COLLECTION_METHODS
