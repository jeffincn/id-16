/* Load all the test requirements
 * ============================================================================= */
var vows = require('vows')
var assert = require('assert')
var id16 = require('../index')

/* Setup the tests
 * ============================================================================= */
vows.describe('id-16').addBatch({
  'An ID': {
    topic: id16,
    'is a base 16 (hexadecimal) string': function (result) {
      /* This regular expression should represent base16 somehow
       * Check (https://www.sitepoint.com/community/t/how-to-check-if-string-is-hexadecimal) */
      var regularExpression = /[0-9A-Fa-f]{6}/g
      assert(regularExpression.test(result))
    },
    'has a default length of 8': function (result) {
      assert.deepEqual(result.length, 8, `ID has unexpected length.`)
    }
  },
  'A generator': {
    topic: id16.generator,
    'returns a function': function (result) {
      assert.deepEqual(typeof result, 'function', `id16.generator() does not return a function.`)
    },
    'creates a base 16 (hexadecimal) string': function (result) {
      /* This regular expression should represent base16 somehow
       * Check (https://www.sitepoint.com/community/t/how-to-check-if-string-is-hexadecimal) */
      var regularExpression = /[0-9A-Fa-f]{6}/g
      assert(regularExpression.test(result()))
    },
    "creates unique ID's": function (result) {
      assert.notEqual(result(), result(), `The generator created two identical ID's`)
    },
    'has a base length of 8': function (result) {
      assert.deepEqual(result().length, 8, `ID created by the generator has unexpected length.`)
    }
  }
}).export(module)
