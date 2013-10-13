function lt(ro) {
  return function (lo) { return lo < ro; };
}

var num = [5, 500, 50, 101, 200, 35];
var out = num.filter(lt(100));

console.log('less than 100:', out);
//=> less than 100: [ 5, 50, 35 ]
