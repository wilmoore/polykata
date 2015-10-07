'use strict'

/*!
 * imports.
 */

var format = require('util').format

/*!
 * exports.
 */

module.exports = initialize

/**
 * Object initialization.
 */

function initialize (name, health, strength) {
  return Object.create({
    name,
    health,
    strength,
    attack
  })
}

/**
 * Attack.
 */

function attack (target) {
  if (!this.health) {
    throw new Error(format("%s cannot attack: he's dead!", this.name))
  }

  target.health = (target.health - this.strength) >= 0 ? target.health - this.strength : 0
}
