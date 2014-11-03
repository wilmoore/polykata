#!/usr/bin/env node
'use strict';

/*!
 * imports.
 */

var map = require('text-pipe').map;
var split = require('split');
var select = require('text-pipe').select;

/*!
 * convert bytes to utf8 characters
 */

process.stdin.setEncoding("utf8");

/**
 * main.
 */

process.stdin
  // read stdin line-by-line.
  .pipe(split())

  // keep only lines starting with `title:`.
  .pipe(select(function (text) {
    return /^title:/.exec(text);
  }))

  // extract double quoted text.
  .pipe(map(function (text) {
    return text.match(/"(.+)"/)[1].trim();
  }))

  // keep only lines that look like questions.
  .pipe(select(function (text) {
    return /^(how|what|if|does|can|where|why)\b/i.exec(text);
  }))

  // change to sentence-case.
  .pipe(map(function sentenceify(text) {
    return (text[0].toUpperCase() + text.slice(1)).replace(/\b(i)\b/g, "I");
  }))

  // add question-mark.
  .pipe(map(function sentenceify(text) {
    return text.replace(/\?$/, '').trim() + '?';
  }))

  // append newline character.
  .pipe(map(function newline(text) {
    return text + '\n';
  }))

  // to stdout.
  .pipe(process.stdout);

