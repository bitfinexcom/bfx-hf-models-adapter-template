## BFX Honey Framework DB Adapter Template

[![Build Status](https://travis-ci.org/bitfinexcom/bfx-hf-models-adapter-template.svg?branch=master)](https://travis-ci.org/bitfinexcom/bfx-hf-models-adapter-template)

This repo serves as a template for creating new database adapters for the honey framework. All adapters must implement the methods broken out here, and provide a custom initialisation function. This system enables the use of the Honey Framework with multiple database backends. The only requirement for valid adapters is that all method signatures remain the same, and all return values are promises that resolve to the standardized values. All methods are asynchronous.

For testing, `bfx-hf-models` provides a `validateAdapter()` method which throws an error if an adapter fails to provide a required function.

Extra methods may be provided for any of the sub-sets (generic, collection, map) and will be available on `bfx-hf-models` model instances.

### Criteria Definition
For those methods that require criteria for filtering data, a standard criteria format is used. It is knex-friendly and can be parsed for all other databases:

```js
[
  [fieldName, comparator, value],
  ['some-field', '=', 42], // AND with above
]
```

As mentioned in the comment above, all criteria are chained together with AND (&&). For more complex behaviors, either provide a custom method or utilize the generic `raw()` method.

### Generic Methods
* `raw(cb)` - must call `cb` with the internal `db` instance, and return the result; `cb` must return a promise

### Collection Methods
* `bulkInsert(documents)` - insert multiple documents at once
* `find(criteria)` - must return all matching documents
* `rmAll()` - must remove all documents from the collection
* `getAll()` - must return all documents
* `getInRange(criteria, range = { key, start, end })` - must return all matching documents in the specified range
* `insert(document)` - must insert the document into the collection
* `update(criteria, data)` - must update all documents matching the criteria with the specified data
* `upsert(document)` - create or update a single document in-place

### Map Methods
NOTE: All map methods that take an ID support either a direct string ID or a partial document which may be passed to the model `mapKey()` function, returning a generated ID. The ID is assumed to be present on the `mapKey` model field.

* `find(criteria)` - returns documents matching specified criteria
* `rm(docOrID)` - must remove the document at the specified key
* `rmAll()` - removes all documents
* `get(docOrID)` - must return the document at the specified key
* `getAll()` - returns all documents as an object key'd by model key
* `set(docOrID, document)` - must set the document at the specified key
* `create(docOrID, document)` - must create the document at the specified key, throwing an error if it already exists
* `update(docOrID, value)` - must update the document at the specified key, throwing an error if it does not exists

### Examples
For example implementations, see the [SQL adapter](https://github.com/f3rno/bfx-hf-models-adapter-sql) or [LowDB adapter](https://github.com/f3rno/bfx-hf-models-adapter-lowdb)
