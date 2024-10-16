const client = require("./db");

const selectAllAuthors = () => {
  return client.query("SELECT * FROM authors").then((dbRes) => dbRes.rows);
};

const selectAuthorById = (authorId) => {
  const authorExample = {
    id: authorId,
    name: "Francis",
    funny: true,
    description: "Oh boy, he is a teacher",
  }; // TO BE REMOVED WHEN REPLACED WITH QUERY

  return Promise.resolve(authorExample);
};

module.exports = { selectAllAuthors, selectAuthorById };
