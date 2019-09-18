'use strict'

const find = require('./find')
const rmAll = require('./rm_all')
const getAll = require('./get_all')
const update = require('./update')
const insert = require('./insert')
const insertSorted = require('./insert_sorted')
const getInRange = require('./get_in_range')

module.exports = {
  find,
  rmAll,
  getAll,
  update,
  insert,
  insertSorted,
  getInRange
}
