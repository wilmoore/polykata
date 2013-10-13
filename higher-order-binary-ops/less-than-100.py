from operator import lt

num = [5, 500, 50, 101, 200, 35]
out = [n for n in num if lt(n, 100)]

print 'less than 100: %s' % out
#=> less than 100: [5, 50, 35]
