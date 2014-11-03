-module(less_than_100).
-import(lists, [filter/2]).
-export([start/0]).

start() ->
  Lt  = fun(Ro) -> fun(Lo) -> Lo < Ro end end,
  Num = [5, 500, 50, 101, 200, 35],
  Out = lists:filter(Lt(100), Num),
  io:format("less than 100: ~p~n", [Out]).
  %=> less than 100: [5,50,35]
