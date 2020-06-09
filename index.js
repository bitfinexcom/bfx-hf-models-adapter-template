'use strict'

const HFDBTemplateAdapter = require('./lib')

/**
 * This module serves as a template for creating new database adapters for the
 * honey framework. All adapters must implement the methods broken out here,
 * and provide a custom initialisation function. This system enables the use of
 * the Honey Framework with multiple database backends. The only requirement
 * for valid adapters is that all method signatures remain the same, and all
 * return values are promises that resolve to the standardized values. All
 * methods are asynchronous.
 *
 * Works with {@link external:bfx-hf-models}
 *
 * @license Apache-2.0
 * @module bfx-hf-models-adapter-template
 * @function
 * @returns {bfx-hf-models.DBAdapter} adapter
 *
 * @example
 * const HFDBTemplateAdapter = require('bfx-hf-models-adapter-template')
 * const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
 * const HFDB = require('bfx-hf-models')
 *
 * const db = new HFDB({
 *   schema: HFDBBitfinexSchema,
 *   adapter: HFDBTemplateAdapter()
 * })
 *
 * // db is now a valid bfx-hf-models database instance
 */

/**
 * @external bfx-hf-models
 * @see https://github.com/bitfinexcom/bfx-hf-models
 */

module.exports = HFDBTemplateAdapter
