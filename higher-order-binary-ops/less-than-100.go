package main

import "fmt"

func lt(ro int) func(int) bool {
  return func(lo int) bool { return lo < ro }
}

func main() {
  num :=  []int{5, 500, 50, 101, 200, 35}
  var out []int

  for i, _ := range num {
    if (lt(100)(num[i])) {
      out = append(out, num[i])
    }
  }

  fmt.Println("less than 100:", out)
  // => less than 100: [5 50 35]
}
