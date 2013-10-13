<?php
function lt ($ro) {
  return function ($lo) use($ro) { return $lo < $ro; };
}

$num = [5, 500, 50, 101, 200, 35];
$out = array_filter($num, lt(100));

printf('less than 100: [ %s ]', join(', ', $out));
//=> less than 100: [ 5, 50, 35 ]
