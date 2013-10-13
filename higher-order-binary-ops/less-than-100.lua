function lt(lo, ro) return lo < ro end

local num = {5, 500, 50, 101, 200, 35}

local out = {}

for i, val in ipairs(num) do
  if lt(val, 100) then table.insert(out, val) end
end

print(string.format("less than 100: [ %s ]", table.concat(out, ', ')))