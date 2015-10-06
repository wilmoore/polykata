'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var character = require('./character')
var player = require('./player')
var npc = require('./npc')

/*!
 * character unit tests.
 */

test('character()', function (t) {
  var name = 'Predator'
  var health = 40
  var strength = 5
  var player1 = character(name, health, strength)

  t.equal(player1.name, name, 'name is set')
  t.equal(player1.health, health, 'health is set')
  t.equal(player1.strength, strength, 'strength is set')

  t.end()
})

/*!
 * player unit tests.
 */

test('player()', function (t) {
  var name = 'Predator'
  var health = 40
  var strength = 5
  var player1 = player(name, health, strength)

  t.equal(player1.name, name, 'name is set')
  t.equal(player1.health, health, 'health is set')
  t.equal(player1.strength, strength, 'strength is set')
  t.equal(player1.xp, 0, 'xp defaults to 0')
  t.equal(player1.describe(), `${name} has ${health} health points, ${strength} strength and 0 XP points`, 'description is set')

  t.end()
})

/*!
 * npc unit tests.
 */

test('npc()', function (t) {
  var name = 'Predator'
  var health = 40
  var strength = 5
  var race = 'orc'
  var value = 10
  var player1 = npc(name, health, strength, race, value)

  t.equal(player1.name, name, 'name is set')
  t.equal(player1.health, health, 'health is set')
  t.equal(player1.strength, strength, 'strength is set')
  t.equal(player1.race, race, 'race is set')
  t.equal(player1.value, value, 'value is set')

  t.end()
})

/*!
 * player & npc integration tests.
 */

test('player & npc', function (t) {
  var ryu = player('Ryu', 100, 5)
  var ken = npc('Ken', 100, 5, 'human', 25)

  ryu.battle(ken)
  t.equal(ken.health, 95, 'npc health is depleted upon attack')

  ken.health = 0
  t.throws(ken.attack.bind(ken, ryu), 'dead characters are unable to attack')

  ryu.battle(ken)
  t.equal(ryu.xp, 25, 'player gains xp after successful battle')

  t.end()
})
