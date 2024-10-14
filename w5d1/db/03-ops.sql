-- Basic select

SELECT * FROM jokes;

SELECT question, answer FROM jokes;


SELECT question, answer FROM jokes LIMIT 5;


SELECT jokes.question, jokes.answer FROM jokes LIMIT 5;


SELECT jokes.question AS first_part, jokes.answer AS second_part FROM jokes LIMIT 5;


SELECT jokes.question AS "firstPart", jokes.answer AS "secondPart" FROM jokes LIMIT 5;

SELECT * FROM jokes ORDER BY rating ASC; -- default
SELECT * FROM jokes ORDER BY rating; -- default

SELECT * FROM jokes ORDER BY rating DESC;


SELECT 
  jokes.question AS "firstPart", 
  jokes.answer AS "secondPart" 
FROM jokes 
WHERE rating >= 5 
ORDER BY rating DESC;

SELECT 
  jokes.question AS "firstPart", 
  jokes.answer AS "secondPart" 
FROM jokes
WHERE jokes.question LIKE 'What%'
ORDER BY rating DESC;

SELECT 
  jokes.question AS "firstPart", 
  jokes.answer AS "secondPart" 
FROM jokes
WHERE LOWER(jokes.question) LIKE 'what%'
ORDER BY rating DESC;


SELECT 
  jokes.question AS "firstPart", 
  jokes.answer AS "secondPart" 
FROM jokes
WHERE jokes.question ILIKE 'what%'
ORDER BY rating DESC;


SELECT 
  jokes.question AS "firstPart", 
  jokes.answer AS "secondPart" 
FROM jokes
WHERE jokes.question ILIKE '% a %'
AND rating > 3
ORDER BY rating DESC;


SELECT
  rating
FROM 
  jokes;


SELECT
  author_id,
  AVG(rating)
FROM 
  jokes
WHERE author_id IS NOT NULL
GROUP BY author_id  
HAVING  AVG(rating) > 3
;

SELECT * FROM authors WHERE id = 11;


-- JOIN!

SELECT * 
FROM jokes
-- FULL OUTER JOIN authors
LEFT JOIN authors
-- RIGHT JOIN authors
-- INNER JOIN authors
-- JOIN authors
ON jokes.author_id = authors.id
;
-- select * from jokes;

-- author_id
-- authorId


-- SELECT 
--   jokes.*,
--   authors.name AS author_name,
--   authors.funny AS author_funny,
--   authors.description AS author_description
-- FROM jokes
-- LEFT JOIN authors
-- ON jokes.author_id = authors.id
-- WHERE author_id IN (1,2,3)
-- ;


DROP VIEW IF EXISTS jokes_by_cool_authors;
CREATE VIEW jokes_by_cool_authors AS (
  SELECT 
    jokes.*,
    authors.name AS author_name,
    authors.funny AS author_funny,
    authors.description AS author_description
  FROM jokes
  LEFT JOIN authors
  ON jokes.author_id = authors.id
  WHERE author_id IN (
    SELECT
      author_id
    FROM 
      jokes
    WHERE author_id IS NOT NULL
    GROUP BY author_id  
    HAVING  AVG(rating) > 3
  )
);


-- SELECT * FROM jokes LEFT JOIN authors ON authors.id = jokes.author_id
-- SELECT * FROM authors RIGHT JOIN jokes ON authors.id = jokes.author_id

-- BADDDDDD DONT DO IT
-- CREATE TABLE "bobBurger"(
--     id SERIAL PRIMARY KEY, -- PRIMARY KEY
--     name TEXT NOT NULL,
--     funny BOOLEAN NOT NULL,
--     description TEXT NOT NULL
-- );

-- Renaming fields

-- Filter out some results

-- Ordering results

-- Filter based of text

-- Joining tables

-- Potential problems when working with JavaScript

-- AGGREGATE FUNCTIONS

-- AGGREGATES + Nested selects !