'use strict'

/*!
 * imports.
 */

var test = require('tape')

/*!
 * imports (local).
 */

var high = require('./')

/*!
 * tests.
 */

test('multiple equal sums; test index', function (t) {
  var strings = [
    '555-555-5555',
    '(303) 987-6543',
    '222.222.2222',
    '720 5432189',
    '(303) 987-6545'
  ]

  t.plan(1)
  t.equal(high(strings), '(303) 987-6545')
})
