'use strict'

const raw = require('./raw')

/**
 * Methods that must be implemented for both **collection** and **map** models
 */
const GENERIC_METHODS = {
  raw
}

module.exports = GENERIC_METHODS
