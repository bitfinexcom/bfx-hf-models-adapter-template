## Bitfinex Honey Framework DB Adapter Template for Node.JS

[![Build Status](https://travis-ci.org/bitfinexcom/bfx-hf-models-adapter-template.svg?branch=master)](https://travis-ci.org/bitfinexcom/bfx-hf-models-adapter-template)

This repo serves as a template for creating new database adapters for the honey framework. All adapters must implement the methods broken out here, and provide a custom initialisation function. This system enables the use of the Honey Framework with multiple database backends. The only requirement for valid adapters is that all method signatures remain the same, and all return values are promises that resolve to the standardized values. All methods are asynchronous.

### Features
* Provides a template enumerating all required methods for `bfx-hf-models` compatibility

### Installation

```bash
npm i --save bfx-hf-models-adapter-template
```

### Quickstart & Example
Although the resulting DB instance is useless as it does not have an actual DB backend to write/read data, the following example illustrates how to pass an adapter to a `bfx-hf-models` instance:

```js
const HFDBTemplateAdapter = require('bfx-hf-models-adapter-template')
const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
const HFDB = require('bfx-hf-models')

const db = new HFDB({
  schema: HFDBBitfinexSchema,
  adapter: HFDBTemplateAdapter()
})

// db is now a valid bfx-hf-models database instance
```

### Docs

[Refer to the `examples/`](/examples) folder for executable examples. For information on the available model methods, check the documentation for [bfx-hf-models](https://github.com/bitfinexcom/bfx-hf-models/tree/master/docs) or [refer to `docs/requirements.md`](/docs/requirements.md) for a specification of what a valid adapter must provide.

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
