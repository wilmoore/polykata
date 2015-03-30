'use strict'

/*!
 * imports.
 */

var sum = require('sum.js')

/*!
 * exports.
 */

module.exports = high

function high (strings) {
  return toStruct(strings)[0].string
}

function toStruct (list) {
  return list.map(function (string, idx) {
    return {
      string: string,
      sum: sum(str2arr(str2num(string))),
      idx: idx
    }
  }).sort(ranked)
}

function str2arr (string) {
  return string.split('')
}

function str2num (string) {
  return string.replace(/[^\d]/g, '')
}

function ranked (a, b) {
  return (a.sum === b.sum)
    ? b.idx - a.idx
    : b.sum - a.sum
}
