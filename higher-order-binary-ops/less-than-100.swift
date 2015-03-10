func lt(ro: Int)(lo: Int) -> Bool {
  return lo < ro
}

let num = [5, 500, 50, 101, 200, 35]
let out = num.filter(lt(100))

println("less than 100: \(out)")
//=> less than 100: [5, 50, 35]
