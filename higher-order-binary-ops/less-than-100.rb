lt = -> ro, lo { lo < ro }.curry

num = [5, 500, 50, 101, 200, 35]
out = num.select &lt[100]

puts "less than 100: #{out}"
#=> less than 100: [5, 50, 35]
