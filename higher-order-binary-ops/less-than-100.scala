def lt(ro: Int)(lo: Int): Boolean = lo < ro

val num = List(5, 500, 50, 101, 200, 35)
val out = num filter { lt(100) }

println(s"less than 100: [ ${out.mkString(", ")} ]")
//=> less than 100: [ 5, 50, 35 ]
