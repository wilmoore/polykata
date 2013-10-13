main() {
  var lt  = (ro) => (lo) => lo < ro;
  var num = [5, 500, 50, 101, 200, 35];
  var out = num.where(lt(100)).toList();

  print('less than 100: ${out}');
  //=> less than 100: [ 5, 50, 35 ]
}
