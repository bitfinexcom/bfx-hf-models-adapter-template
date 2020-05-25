'use strict'

const HFDBTemplateAdapter = require('./lib/index')

/**
 * This module serves as a template for creating new database adapters for the
 * honey framework. All adapters must implement the methods broken out here,
 * and provide a custom initialisation function. This system enables the use of
 * the Honey Framework with multiple database backends. The only requirement
 * for valid adapters is that all method signatures remain the same, and all
 * return values are promises that resolve to the standardized values. All
 * methods are asynchronous.

 * ### Features
 * * Provides a template enumerating all required methods for
 *   {@link module:bfx-hf-models|bfx-hf-models} compatibility

 * ### Installation

 * ```bash
 * npm i --save bfx-hf-models-adapter-template
 * ```

 * ### Quickstart & Example
 * Although the resulting DB instance is useless as it does not have an actual
 * DB backend to write/read data, the following example illustrates how to pass
 * an adapter to a {@link module:bfx-hf-models|bfx-hf-models} instance:

 * ```js
 * const HFDBTemplateAdapter = require('bfx-hf-models-adapter-template')
 * const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
 * const HFDB = require('bfx-hf-models')

 * const db = new HFDB({
 *   schema: HFDBBitfinexSchema,
 *   adapter: HFDBTemplateAdapter()
 * })

 * // db is now a valid bfx-hf-models database instance
 * ```
 *
 * @license Apache-2.0
 * @module bfx-hf-models-adapter-template
 */

module.exports = HFDBTemplateAdapter
