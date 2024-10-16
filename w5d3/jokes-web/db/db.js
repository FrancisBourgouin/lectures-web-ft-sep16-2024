const pg = require("pg");

const client = new pg.Client({
  host: "localhost",
  user: "labber",
  password: "labber",
  database: "jokes_sep16",
});

client.connect();

module.exports = client;
