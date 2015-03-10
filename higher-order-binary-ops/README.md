# Higher Order Binary Operations

Filter a list by applying a generated comparison operatation (function). Multiple languages and paradigms are represented to reveal whatever you are looking to reveal :).

This originally [started as a gist](https://gist.github.com/wilmoore/5559376).

## Languages Represented

- [Swift](less-than-100.swift)
  - **PRO**: First class currying, concise syntax (event better than scala/ruby).
  - **CON**: No implicit return outside of closure, doesn't run on linux/windows (yet), namespaces instead of a decent module/package system (yuck).

- [Elixir](less-than-100.ex)
  - **PRO**: Very expressive language on top of the Erlang VM. Whoa...where have you been all my life?
  - **CON**: Too new and doesn't _yet_ offer _enough_ benefit over Node/JavaScript on the server. But for new projects...perhaps?

- [Scala](less-than-100.scala)
  - **PRO**: First class currying and concise syntax.
  - **CON**: JVM...no thanks, namespaces instead of a decent module/package system (yuck).

- [Go](less-than-100.go)
  - **PRO**: Cross-compile to other architectures.
  - **CON**: I must be doing it wrong because there is no way the language is this fugly (UPDATE: actually, it seems this was a design choice; no thanks).

- [Clojure](less-than-100.clj)
  - **PRO**: Impressive...concise syntax; very clean for a paren-happy language. 
  - **CON**: JVM...no thanks, namespaces instead of a decent module/package system (yuck)..

- [Groovy](less-than-100.groovy)
  - **PRO**: Ruby on the JVM...cute!
  - **CON**: JVM...no thanks, namespaces instead of a decent module/package system (yuck)..

- [Ruby](less-than-100.rb)
  - **PRO**: The most beautiful language ever + Enumerable standard library module.
  - **CON**: Slow VM w/ global interpreter lock, non-trivial and fairly large install (just use RVM is not a good answer IMHO), the gems system needs help (bundler makes life better, but it's no panacea), importing a module is global (yuck).

- [Python](less-than-100.py)
  - **PRO**: Pretty little language, everything is explicit, list comprehensions, kitchen sink standard library.
  - **CON**: Kitchen sink standard library, may be slower than Ruby...that's actually a pretty impressive feat.

- [PHP](less-than-100.php)
  - **PRO**: A very prolifit language. It's everywhere.
  - **CON**: It's everywhere, lacks expressiveness, configuration system with lots of surprises.

- [Dart](less-than-100.dart)
  - **PRO**: Extremely intuitive and fairly concise.
  - **CON**: Nobody (self included) seems to care.

- [LiveScript](less-than-100.op-ls) ([curried](less-than-100.ls))
  - **PRO**: This is what I thought CoffeeScript was going to be + hints of Scala.
  - **CON**: None that I can see so far. I'd caution that the functional bias of the language may seem daunting to some.

- [CoffeeScript](less-than-100.coffee)
  - **PRO**: JavaScript a little lipstick.
  - **CON**: Cute; however, doesn't provide _enough_ value over raw JavaScript or something like [Babel](https://babeljs.io).

- [JavaScript](less-than-100.js)
  - **PRO**: JavaScript is very expressive and quite fast. NodeJS and modern browsers make JavaScript fun.
  - **CON**: Lots of gotchas in the language and in the browser/DOM.

## Inspiration

- [Why I Don't Write Web Apps (if I can help it)](https://gist.github.com/cloudhead/1522576)
