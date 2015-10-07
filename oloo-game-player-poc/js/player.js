'use strict'

/*!
 * imports.
 */

var character = require('./character')
var format = require('util').format

/*!
 * exports.
 */

module.exports = initialize

/**
 * Object initialization.
 */

function initialize (name, health, strength) {
  return Object.assign(character.apply(null, arguments), {
    battle,
    describe,
    xp: 0
  })
}

/**
 * Describe.
 */

function describe () {
  return format('%s has %d health points, %d strength and %d XP points', this.name, this.health, this.strength, this.xp)
}

/**
 * Battle.
 */

function battle (npc) {
  this.attack(npc)
  if (npc.health === 0) this.xp += npc.value
}
