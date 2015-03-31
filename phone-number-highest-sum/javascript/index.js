'use strict'

/*!
 * imports.
 */

var sum = require('sum.js')

/*!
 * exports.
 */

module.exports = function high (strings) {
  return strings.map(toStruct).sort(ranked)[0].out
}

/**
 * Return an object composed of:
 *  - out (original input string)
 *  - sum (string's numbers summed)
 *  - idx (position in array)
 */

function toStruct (string, idx) {
  return {
    out: string,
    sum: sum(string.replace(/[^\d]/g, '').split('')),
    idx: idx
  }
}

/**
 * Order by descending by .sum, and tie break using .idx.
 */

function ranked (a, b) {
  return (a.sum === b.sum)
    ? b.idx - a.idx
    : b.sum - a.sum
}
