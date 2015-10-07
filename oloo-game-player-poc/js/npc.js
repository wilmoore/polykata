'use strict'

/*!
 * imports.
 */

var character = require('./character')

/*!
 * exports.
 */

module.exports = initialize

/**
 * Object initialization.
 */

function initialize (name, health, strength, race, value) {
  return Object.assign(character.apply(null, arguments), {
    race,
    value
  })
}
