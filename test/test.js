/* Load all the test requirements
 * ============================================================================= */
var vows = require('vows')
var assert = require('assert')
var id16 = require('../index')

/* Setup the tests
 * ============================================================================= */
vows.describe('generate-ID').addBatch({
  'An ID': {
    topic: id16,
    'has a default length of 8': function (result) {
      assert.deepEqual(result.length, 8, `ID has unexpected length.`)
    }
  },
  'A generator': {
    topic: id16.generator,
    'returns a function': function (result) {
      assert.deepEqual(typeof result, 'function', `id16.generator() does not return a function.`)
    },
    "creates unique ID's": function (result) {
      assert.notEqual(result(), result(), `The generator created two identical ID's`)
    },
    'has a base length of 8': function (result) {
      assert.deepEqual(result().length, 8, `ID created by the generator has unexpected length.`)
    }
  }
}).export(module)
