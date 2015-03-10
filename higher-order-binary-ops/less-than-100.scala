def lt(ro: Int)(lo: Int): Boolean = lo < ro

val num = List(5, 500, 50, 101, 200, 35)
val out = num filter { lt(100) } // or: num filter { _ < 100 } since the < operator is a curried function.

println(s"less than 100: [ ${out.mkString(", ")} ]")
//=> less than 100: [ 5, 50, 35 ]
