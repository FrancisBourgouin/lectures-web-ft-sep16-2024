-- Fetch all jokes w/ authors

SELECT * 
FROM jokes
LEFT JOIN authors
  ON authors.id = jokes.author_id
;

-- Fetch joke by id w/ authors

SELECT * 
FROM jokes
LEFT JOIN authors
  ON authors.id = jokes.author_id
WHERE jokes.id = 1
;

