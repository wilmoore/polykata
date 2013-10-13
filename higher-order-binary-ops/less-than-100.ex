defmodule Operator do
  def lt(ro) do fn(lo) -> lo < ro end end
end

num = [5, 500, 50, 101, 200, 35]
out = Enum.filter num, Operator.lt(100).(&1)

IO.puts "less than 100: [ #{Enum.join(out, ', ')} ]"
#=> less than 100: [ 5, 50, 35 ]
