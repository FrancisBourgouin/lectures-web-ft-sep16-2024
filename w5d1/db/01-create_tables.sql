DROP TABLE IF EXISTS jokes; 
DROP TABLE IF EXISTS authors;

CREATE TABLE authors(
    id SERIAL PRIMARY KEY, -- PRIMARY KEY
    name TEXT NOT NULL,
    funny BOOLEAN NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE jokes(
   id SERIAL PRIMARY KEY, -- PRIMARY KEY
   question TEXT NOT NULL,
   answer TEXT,
   rating FLOAT NOT NULL,
   author_id INT REFERENCES authors(id) ON DELETE CASCADE -- FOREIGN KEY
);

-- SERIAL: pg exclusive (auto incrementing integer)
-- TEXT: Text!
-- BOOLEAN: 0/1
-- VARCHAR: Variable Character VARCHAR(6)
-- FLOAT: Ice cream on top of rootbeer (Floating point number) 314 => 3.14
-- 

-- Tinyapp => set a cookie with the user id (or email) => getUserById or getUserByEmail