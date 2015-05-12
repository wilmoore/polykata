main = do
  let num = [5, 500, 50, 101, 200, 35]
  let out = filter (<100) num
  putStrLn $ "less than 100: " ++ show out
  -- less than 100: [5,50,35]
