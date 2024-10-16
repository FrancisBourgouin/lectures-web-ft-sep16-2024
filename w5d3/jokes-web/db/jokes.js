const client = require("./db");

const selectAllJokes = () => {
  const queryStr = `
    SELECT 
      jokes.*,
      authors.name AS author_name,
      authors.description AS author_description,
      authors.funny AS author_funny
    FROM jokes
    LEFT JOIN authors
      ON authors.id = jokes.author_id
  `;
  return client.query(queryStr).then((dbRes) => dbRes.rows);
};

const selectJokeById = (jokeId) => {
  const queryStr = `
    SELECT 
      jokes.*,
      authors.name AS author_name,
      authors.description AS author_description,
      authors.funny AS author_funny
    FROM jokes
    LEFT JOIN authors
      ON authors.id = jokes.author_id
    WHERE jokes.id = $1
  `;
  const queryArgs = [jokeId];
  return client.query(queryStr, queryArgs).then((dbRes) => dbRes.rows[0]);
};

const insertJoke = (joke) => {
  const queryStr = `
    INSERT INTO
      jokes (question, answer, rating, author_id)
    VALUES
      ($1, $2, $3, $4)
    RETURNING *
    `;
  // const queryArgs = [process.argv[2], process.argv[3], process.argv[4], process.argv[5]]
  const queryArgs = [joke.question, joke.answer, joke.rating, joke.author_id];

  return client.query(queryStr, queryArgs).then((dbRes) => dbRes.rows[0]);
};

module.exports = { selectAllJokes, selectJokeById, insertJoke };
