'use strict'

const create = require('./create')
const update = require('./update')
const get = require('./get')
const set = require('./set')
const rm = require('./rm')

/**
 * Methods that must be implemented for **map** models
 */
const MAP_METHODS = {
  create,
  update,
  get,
  set,
  rm
}

module.exports = MAP_METHODS
