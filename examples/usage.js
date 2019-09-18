'use strict'

const TemplateAdapter = require('../')
const { schema: DummySchema } = require('bfx-hf-ext-plugin-dummy')
const HFDB = require('bfx-hf-models')

const DB_PATH = `${__dirname}/../db/example.json`

// creates a valid bfx-hf-models DB instance
const db = new HFDB({ // eslint-disable-line
  schema: DummySchema,
  adapter: TemplateAdapter({
    dbPath: DB_PATH,
    schema: DummySchema
  })
})
