# Higher Order Binary Operations

Filter a list by applying a generated comparison operation (function). Multiple languages and paradigms are represented to reveal whatever you are looking to reveal :).

This originally [started as a gist](https://gist.github.com/wilmoore/5559376).

## Highest Priorities

- sane module system
- expressiveness
- first-class functions

## Languages Represented

- [Swift](less-than-100.swift) (💚 - would use in production)
  - **PRO**: Expressive, first-class functions, literal curry syntax, class methods are curried, nice enum syntax, nice optional types and generics support.
  - **CON**: No implicit return in plain functions, weird cocoa/NS history, no regular expression literals, `assert` does not throw an exception (WTF?), overly tight coupling between test runner, reporting, and Xcode, doesn't run on linux/windows (yet), namespaces instead of a decent module/package system (yuck).

- [Erlang](less-than-100.erl) (💚 - would use in production)
  - **PRO**: Expressive, first-class functions, nice module system with explicit import/export syntax and a sane requirement that imports/exports must be defined at the top of the module.
  - **CON**: No auto-currying, required to learn non-intuitive punctuation-heavy syntax. Long history of no good dependency manager until recently so it's quite behind.

- [Elixir](less-than-100.ex) (💚 - would use in production)
  - **PRO**: Expressive, first-class functions, utilizes the Erlang VM. Live code upgrades (development and production), pattern matching, built-in automated testing, excellent unicode support, built-in concurrency primitives, built-in build tool, built-in dependency management, a sane non-global scope polluting module system, automatic distributed processing, first-class function documentation, literal regular expression syntax, non-blocking and multi-core by default.
  - **CON**: No auto-currying, weird closure syntax, not strongly-typed, no breakpoint capable debugger.

- [JavaScript](less-than-100.js) (💚 - would use in production)
  - **PRO**: Expressive, first-class functions, prototypal language. Nice module system (CommonJS/NodeJS) that resembles the Erlang module system. Excellent dependency management with npm (npm is good for NodeJS as well as the browser). Great testing tools. Community is commited to single-purpose modules.
  - **CON**: Has some annoying gotchas (though not as many outside of browser/DOM API) like automatic type conversion, ASI, and crappy C-isms. Scope (i.e. `this`) is a bit awkward for those new to the language.

  Recommentations:
    - take the time to learn about prototypes and `Function.prototype.{apply,bind,call}` and it all all make sense.
    - use [Babel](https://babeljs.io) to get access to generators, native promises, string interpolation, named/default parameters, and more.

- [Ruby](less-than-100.rb) (✔ - would use reluctantly in production in certain situations)
  - **PRO**: Pretty little language.
  - **CON**: Slowish VM with global interpreter lock (though it is getting better), huge standard library, non-trivial and fairly large install (just use RVM is not a good answer IMHO), the gems system needs help (bundler makes life better, but it's no panacea), global scope polluting module system (yuck).

- [CoffeeScript](less-than-100.coffee) (❌ - would not use in production)
  - **PRO**: Normalizes some of JavaScript's gotchas. The existential operator is genuinely useful. CoffeeScript is a brilliant experiment.
  - **CON**: Has lots of unexpected nuances; unfortunately you still need to understand JavaScript nuances so you've increased your problems. CoffeeScript ties your hands in ways that are non-obvious until you learn more about JavaScript; by then, the damage is done. It doesn't do anything to cure the DOM APIs (Yes, most of your JS woes are with the DOM, not JavaScript). Encourages users to forget that JavaScript is a prototypal language.

  READ: [Peter Lyons: From CoffeeScript Back to JavaScript](http://peterlyons.com/problog/2014/01/from-coffeescript-back-to-javascript)

- [Scala](less-than-100.scala) (❌ - would not use in production)
  - **PRO**: Expressive, Nice type system, first class currying, great ecosystem of useful libraries.
  - **CON**: JVM...no thanks, namespaces instead of a decent module/package system (yuck).

  Summary:
    - I actually really like Scala; however, I have a (probably unfair) aversion to the JVM and JVM-related tooling (i.e. Maven, etc.) and namespacing that keeps me from caring enough.
    - I almost got into it; however, I got distracted by NodeJS (I write lots of JSON APIs) and never really looked back.
    - I almost gave it another crack, then I learned of Rust and Elixir.
    - Given a choice between the JVM and Go, I'd of course choose Scala (which I like) on the JVM.

- [Go](less-than-100.go) (❌ - would not use in production)
  - **PRO**: Cross-compile to multiple architectures. Lots of useful tools are included. I've seen people build some really neat things with Go.
  - **CON**: Ugly, non-expressive language. `GOPATH` (seriously?). The type system is not great compared to other modern staticly-typed languages (i.e. requires lots of boilerplate to do anything interesting). Classes can have constructors, but there's no way to force calling the constructor when instantiating the class. No central package authority so dependencies can just disappear. In some regards, it's a better `c`, yet in some areas, it's worse.

  Summary:
    - Admittedly, there is a legitmate place for such a language, so ultimately, Go will likely continue to do well for a while.

- [Clojure](less-than-100.clj) (❌ - would not use in production)
  - **PRO**: Impressive...concise syntax; very clean for a parenthesis-happy language.
  - **CON**: JVM...no thanks, namespaces instead of a decent module/package system (yuck).

- [Groovy](less-than-100.groovy) (❌ - would not use in production)
  - **PRO**: Ruby on the JVM...cute!
  - **CON**: JVM...no thanks, namespaces instead of a decent module/package system (yuck).

- [Python](less-than-100.py) (❌ - would not use in production)
  - **PRO**: Pretty little language, everything is explicit, list comprehensions, kitchen sink standard library.
  - **CON**: Kitchen sink standard library, may be slower than Ruby...that's actually a pretty impressive feat.

- [Lua](less-than-100.lua) (❌ - would not use in production)
  - **PRO**: Pretty easy to pick up. Clear syntax (much nicer than PHP); good documentation.
  - **CON**: Almost nobody talks about it and I have no idea if there is a module system or dependency manager.

- [PHP](less-than-100.php) (❌ - would not use in production)
  - **PRO**: A very prolific language. It's everywhere.
  - **CON**: It's everywhere, lacks expressiveness, configuration system with lots of surprises. Not well-designed. Encourages bad practices. Global scope polluting module system. Always behind on useful language features. _Mostly_ dysfunctional leadership.

- [Dart](less-than-100.dart) (❌ - would not use in production)
  - **PRO**: Extremely intuitive and fairly concise.
  - **CON**: Nobody (self included) seems to care.

- [LiveScript](less-than-100.op-ls) ([curried](less-than-100.ls)) (❌ - would not use in production)
  - **PRO**: This is what I thought CoffeeScript was going to be + hints of Scala.
  - **CON**: None that I can see so far. I'd caution that the functional bias of the language may seem daunting to some.

## Inspiration

- [Why I Don't Write Web Apps (if I can help it)](https://gist.github.com/cloudhead/1522576)
