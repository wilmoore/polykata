'use strict'

/*!
 * imports.
 */

var character = require('./character')
var concat = require('object-concat')

/*!
 * exports.
 */

module.exports = initialize

/**
 * Object initialization.
 */

function initialize (name, health, strength, race, value) {
  return concat(character.apply(null, arguments), { race, value })
}
