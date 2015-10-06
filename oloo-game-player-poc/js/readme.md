# OLOO Game Player POC
> OLOO (objects linked to other objects) pattern explored through game player objects.

This POC is based on a [comment] on an article called [JS Objects: De"construct"ion]. This POC was not about improving the original RPG's game mechanics so I didn't...it's about providing a clean example of linking objects in JS.

## Overview

JavaScript has a very elegant behavior delegation system via object linking; however, instead of embracing this simplicity, many JS developers blindly subscribe to the notion that JS object construction must look similar to Ruby, Java, C++, etc. This is not only untrue, but it is an unnecessary abuse of the language.

This POC builds upon three principles:

0. CommonJS modules.
0. Composition instead of inheritance.
0. Object linking/delegation.

NOTE: We've swapped out `Object.create` for `npm install --save create-object` since `Object.create` has a pretty horrible property description syntax and doesn't work in older web browsers. The function exported by `create-object` is a replacement for `Object.create` without the superfluous property description cruft. That being said, you can opt to use `Object.create`...in fact, the first rendition used `Object.create` but I factored it out guided by the automated tests.

## Objects to focus on:

- [character]
- [player]
- [npc]

## Usage

```sh
npm install
npm test
```

## Resources

 - [OLOO (objects linked to other objects) pattern explored (with comparison to the prototype style of the same code) Raw][oloo1]
 - [Minimalist RPG example written with ES2015 syntax]

[oloo1]: https://gist.github.com/getify/5572383
[Minimalist RPG example written with ES2015 syntax]: https://gist.github.com/bpesquet/6dac5adeb5f31fdc1951
[comment]: http://davidwalsh.name/javascript-objects-deconstruction#comment-503607
[JS Objects: De"construct"ion]: http://davidwalsh.name/javascript-objects-deconstruction
[character]: character.js
[player]: player.js
[npc]: npc.js
