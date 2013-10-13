(defn lt [ro] #(< % ro))

(def num [5, 500, 50, 101, 200, 35])
(def out (filter (lt 100) num))

(println "less than 100:" out)
;=> less than 100: (5 50 35)
