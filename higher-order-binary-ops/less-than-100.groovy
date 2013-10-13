lt  = { ro -> { lo -> lo < ro } }

num = [5, 500, 50, 101, 200, 35]
out = num.findAll lt(100)

println "less than 100: ${out}"
//=> less than 100: [5, 50, 35]
