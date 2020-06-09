## Constants

<dl>
<dt><a href="#COLLECTION_METHODS">COLLECTION_METHODS</a></dt>
<dd><p>Methods that must be implemented for <strong>collection</strong> models</p>
</dd>
<dt><a href="#GENERIC_METHODS">GENERIC_METHODS</a></dt>
<dd><p>Methods that must be implemented for both <strong>collection</strong> and <strong>map</strong> models</p>
</dd>
<dt><a href="#MAP_METHODS">MAP_METHODS</a></dt>
<dd><p>Methods that must be implemented for <strong>map</strong> models</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#bfx-hf-models-adapter-template">bfx-hf-models-adapter-template()</a> ⇒ <code>bfx-hf-models.DBAdapter</code></dt>
<dd><p>This module serves as a template for creating new database adapters for the
honey framework. All adapters must implement the methods broken out here,
and provide a custom initialisation function. This system enables the use of
the Honey Framework with multiple database backends. The only requirement
for valid adapters is that all method signatures remain the same, and all
return values are promises that resolve to the standardized values. All
methods are asynchronous.</p>
<p>Works with <a href="https://github.com/bitfinexcom/bfx-hf-models">bfx-hf-models</a></p>
</dd>
</dl>

<a name="COLLECTION_METHODS"></a>

## COLLECTION\_METHODS
Methods that must be implemented for **collection** models

**Kind**: global constant  

* [COLLECTION_METHODS](#COLLECTION_METHODS)
    * [.bulkInsert(db, model, docs)](#COLLECTION_METHODS.bulkInsert) ⇒ <code>Promise</code>
    * [.find(db, model, criteria)](#COLLECTION_METHODS.find) ⇒ <code>Promise</code>
    * [.getAll(db, model)](#COLLECTION_METHODS.getAll) ⇒ <code>Promise</code>
    * [.getInRange(db, model, criteria, range, [sort])](#COLLECTION_METHODS.getInRange) ⇒ <code>Promise</code>
    * [.insert(db, model, doc)](#COLLECTION_METHODS.insert) ⇒ <code>Promise</code>
    * [.rmAll(db, model)](#COLLECTION_METHODS.rmAll) ⇒ <code>Promise</code>
    * [.update(db, model, criteria, data)](#COLLECTION_METHODS.update) ⇒ <code>Promise</code>
    * [.upsert(db, model, doc)](#COLLECTION_METHODS.upsert) ⇒ <code>Promise</code>

<a name="COLLECTION_METHODS.bulkInsert"></a>

### COLLECTION_METHODS.bulkInsert(db, model, docs) ⇒ <code>Promise</code>
Inserts all the provided documents to the path in the provided model

**Kind**: static method of [<code>COLLECTION\_METHODS</code>](#COLLECTION_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to array  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | model instance |
| docs | <code>Array.&lt;object&gt;</code> | documents |

<a name="COLLECTION_METHODS.find"></a>

### COLLECTION_METHODS.find(db, model, criteria) ⇒ <code>Promise</code>
Queries a collection for records matching a set of criteria

**Kind**: static method of [<code>COLLECTION\_METHODS</code>](#COLLECTION_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to array of matching records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | model instance |
| criteria | <code>Array.&lt;bfx-hf-models.DBAdapterCriteria&gt;</code> | array of criteria   which must be met for a record to be included in the results |

<a name="COLLECTION_METHODS.getAll"></a>

### COLLECTION_METHODS.getAll(db, model) ⇒ <code>Promise</code>
Returns all records in a collection

**Kind**: static method of [<code>COLLECTION\_METHODS</code>](#COLLECTION_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to an array with all records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | model instance |

<a name="COLLECTION_METHODS.getInRange"></a>

### COLLECTION_METHODS.getInRange(db, model, criteria, range, [sort]) ⇒ <code>Promise</code>
Queries records matching a set of criteria and a key in the specified range

**Kind**: static method of [<code>COLLECTION\_METHODS</code>](#COLLECTION_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to an array of matching records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | model instance |
| criteria | <code>Array.&lt;bfx-hf-models.DBAdapterCriteria&gt;</code> | criteria |
| range | <code>object</code> | range definition |
| range.key | <code>string</code> | key name on records to be checked against   start/end limits |
| range.start | <code>number</code> | minimum value for `range.key` |
| range.end | <code>number</code> | maximum value for `range.key` |
| [sort] | <code>object</code> | sort parameters |
| [sort.orderBy] | <code>string</code> | key to sort results by |
| [sort.orderDirection] | <code>string</code> | `'desc'` for descending results,   otherwise ascending. |

<a name="COLLECTION_METHODS.insert"></a>

### COLLECTION_METHODS.insert(db, model, doc) ⇒ <code>Promise</code>
Inserts a record into a collection

**Kind**: static method of [<code>COLLECTION\_METHODS</code>](#COLLECTION_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to inserted record data  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | initialized model instance |
| doc | <code>object</code> | record to be inserted |

<a name="COLLECTION_METHODS.rmAll"></a>

### COLLECTION_METHODS.rmAll(db, model) ⇒ <code>Promise</code>
Removes all records from a collection

**Kind**: static method of [<code>COLLECTION\_METHODS</code>](#COLLECTION_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to number of removed records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | model instance |

<a name="COLLECTION_METHODS.update"></a>

### COLLECTION_METHODS.update(db, model, criteria, data) ⇒ <code>Promise</code>
Updates all records in a collection matching the specified criteria with the
provided data.

**Kind**: static method of [<code>COLLECTION\_METHODS</code>](#COLLECTION_METHODS)  
**Returns**: <code>Promise</code> - p - resolves with the number of modified records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | initialized model instance |
| criteria | <code>Array.&lt;bfx-hf-models.DBAdapterCriteria&gt;</code> | array of criteria to   be met for a record to be updated |
| data | <code>object</code> | data to saved on matching records; partial update |

<a name="COLLECTION_METHODS.upsert"></a>

### COLLECTION_METHODS.upsert(db, model, doc) ⇒ <code>Promise</code>
Creates or updates the provided document in-place

**Kind**: static method of [<code>COLLECTION\_METHODS</code>](#COLLECTION_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to upserted document  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | model instance |
| doc | <code>object</code> | document |

<a name="GENERIC_METHODS"></a>

## GENERIC\_METHODS
Methods that must be implemented for both **collection** and **map** models

**Kind**: global constant  
<a name="GENERIC_METHODS.raw"></a>

### GENERIC_METHODS.raw(db, model, cb) ⇒ <code>Promise</code>
Executes a database query

**Kind**: static method of [<code>GENERIC\_METHODS</code>](#GENERIC_METHODS)  
**Returns**: <code>Promise</code> - p - as returned by the callback `cb`  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | initialized model instance |
| cb | <code>function</code> | called with `(db, model)`, must return a promise |

<a name="MAP_METHODS"></a>

## MAP\_METHODS
Methods that must be implemented for **map** models

**Kind**: global constant  

* [MAP_METHODS](#MAP_METHODS)
    * [.create(db, model, data)](#MAP_METHODS.create) ⇒ <code>Promsie</code>
    * [.find(db, model, criteria)](#MAP_METHODS.find) ⇒ <code>Promise</code>
    * [.getAll(db, model)](#MAP_METHODS.getAll) ⇒ <code>Promise</code>
    * [.get(db, model, docOrID)](#MAP_METHODS.get) ⇒ <code>Promise</code>
    * [.rmAll(db, model)](#MAP_METHODS.rmAll) ⇒ <code>Promise</code>
    * [.rm(db, model, docOrID)](#MAP_METHODS.rm) ⇒ <code>Promise</code>
    * [.set(db, model, value)](#MAP_METHODS.set) ⇒ <code>object</code>
    * [.update(db, model, docOrID, value)](#MAP_METHODS.update) ⇒ <code>Promise</code>

<a name="MAP_METHODS.create"></a>

### MAP_METHODS.create(db, model, data) ⇒ <code>Promsie</code>
Creates a new record

**Kind**: static method of [<code>MAP\_METHODS</code>](#MAP_METHODS)  
**Returns**: <code>Promsie</code> - p - resolves to created record  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | initialized model instance |
| data | <code>object</code> | data to be saved as a new record |

<a name="MAP_METHODS.find"></a>

### MAP_METHODS.find(db, model, criteria) ⇒ <code>Promise</code>
Queries a document based on the provided criteria

**Kind**: static method of [<code>MAP\_METHODS</code>](#MAP_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to array of filtered documents  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | model instance |
| criteria | <code>Array.&lt;bfx-hf-models.DBAdapterCriteria&gt;</code> | array of criteria to   be met for a record to be updated |

<a name="MAP_METHODS.getAll"></a>

### MAP_METHODS.getAll(db, model) ⇒ <code>Promise</code>
Queries all documents on a model collection

**Kind**: static method of [<code>MAP\_METHODS</code>](#MAP_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to array of all documents  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | model instance |

<a name="MAP_METHODS.get"></a>

### MAP_METHODS.get(db, model, docOrID) ⇒ <code>Promise</code>
Fetch a record by ID

**Kind**: static method of [<code>MAP\_METHODS</code>](#MAP_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to matching record  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | initialized model instance |
| docOrID | <code>object</code> \| <code>string</code> \| <code>number</code> | record to fetch or its ID |

<a name="MAP_METHODS.rmAll"></a>

### MAP_METHODS.rmAll(db, model) ⇒ <code>Promise</code>
Removes all documents on a model collection

**Kind**: static method of [<code>MAP\_METHODS</code>](#MAP_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to number of removed records  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>object</code> | model instance |

<a name="MAP_METHODS.rm"></a>

### MAP_METHODS.rm(db, model, docOrID) ⇒ <code>Promise</code>
Removes a record by ID

**Kind**: static method of [<code>MAP\_METHODS</code>](#MAP_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to removed record  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | initialized model instance |
| docOrID | <code>object</code> \| <code>string</code> \| <code>number</code> | record to remove or its ID |

<a name="MAP_METHODS.set"></a>

### MAP_METHODS.set(db, model, value) ⇒ <code>object</code>
Updates an existing record

**Kind**: static method of [<code>MAP\_METHODS</code>](#MAP_METHODS)  
**Returns**: <code>object</code> - record - final record value as stored in the DB  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | initialized model instance |
| value | <code>object</code> | record value, containing relevant data for key   generation. Any existing record with the same key will be overwritten. |

<a name="MAP_METHODS.update"></a>

### MAP_METHODS.update(db, model, docOrID, value) ⇒ <code>Promise</code>
Updates a record by ID

**Kind**: static method of [<code>MAP\_METHODS</code>](#MAP_METHODS)  
**Returns**: <code>Promise</code> - p - resolves to number of updated rows (always 1)  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>object</code> | db instance |
| model | <code>bfx-hf-models.Model</code> | initialized model instance |
| docOrID | <code>object</code> \| <code>string</code> \| <code>number</code> | record to update or its ID |
| value | <code>object</code> | new data for the record |

<a name="bfx-hf-models-adapter-template"></a>

## bfx-hf-models-adapter-template() ⇒ <code>bfx-hf-models.DBAdapter</code>
This module serves as a template for creating new database adapters for the
honey framework. All adapters must implement the methods broken out here,
and provide a custom initialisation function. This system enables the use of
the Honey Framework with multiple database backends. The only requirement
for valid adapters is that all method signatures remain the same, and all
return values are promises that resolve to the standardized values. All
methods are asynchronous.

Works with [bfx-hf-models](https://github.com/bitfinexcom/bfx-hf-models)

**Kind**: global function  
**Returns**: <code>bfx-hf-models.DBAdapter</code> - adapter  
**License**: Apache-2.0  
**Example**  
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
