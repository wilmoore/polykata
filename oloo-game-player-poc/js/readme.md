# OLOO Game Player POC
> OLOO (objects linked to other objects) pattern explored through game player objects.

This POC is based on a [comment] on an article called [JS Objects: De"construct"ion]. This POC was not about improving the original RPG's game mechanics so I didn't...it's about providing a clean example of linking objects in JS.

## Overview

JavaScript has a very elegant behavior delegation system via object linking; however, instead of embracing this simplicity, many JS developers blindly subscribe to the notion that JS object construction must look similar to Ruby, Java, C++, etc. This is not only untrue, but it is an unnecessary abuse of the language.

This POC builds upon three principles:

0. CommonJS [modules].
0. [Composition] instead of inheritance.
0. Object [linking/delegation].

## Additional benefits

- No need to invoke `new` so there is no possiblity of subtle construction bugs.
- Mitigates the need to wait for special `class` or `constructor` syntax introduced in ES6 to be avaialble and no need to transpile to get it.
- Mitigates the need to have a ton of indentation up front so code doesn't start out looking messy.
- Mitigates the need to write `Ctor.prototype.method = function method` boilerplate.
- Removes the temptation to architect __classes__ when __functions__ will suffice.

## Objects to focus on:

- [character]
- [player]
- [npc]

## Usage

```sh
npm install
npm test
```

## Compatability

- Uses ES6 object literal shorthand assignments for brevity so you'll need a capable JS engine or you'll need to transpile.
- Uses ES6 `Object.assign` so you'll need a [shim][object-assign] or an [alternative][object-concat] if you intend to use in older JS engines.
- Uses ES5 `Object.create` so you'll need a [shim][object-create] or an [alternative][create-object] if you intend to use in older JS engines.

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
[create-object]: https://www.npmjs.com/package/create-object
[object-concat]: https://www.npmjs.com/package/create-object
[object-assign]: https://www.npmjs.com/package/object-assign
[object-create]: https://www.npmjs.com/package/object-create
[modules]: character.js#L13
[Composition]: player.js#L21-L25
[linking/delegation]: player.js#L22-L23
