const pg = require("pg");
let client;

const connectToDB = (connectionInfo) => {
  client = new pg.Client(connectionInfo);

  return client.connect();
};

const runQuery = (queryStr) => {
  return client.query(queryStr).then((res) => res.rows);
};

const closeConnection = () => client.end();

const catchTheBooBoo = (err) => {
  console.log("\n\n (╯°□°）╯︵ ┻━┻");
  console.log(err);
  console.log("Ayyyyy");
};

const connectionInfo = {
  host: "localhost",
  user: "labber",
  password: "labber",
  database: "jokes_sep16",
};

const queryStr = `
SELECT * 
FROM jokes
LEFT JOIN authors
  ON authors.id = jokes.author_id
;
`;

connectToDB(connectionInfo)
  .then(() => runQuery(queryStr))
  .then(console.log)
  .then(closeConnection)
  .catch(catchTheBooBoo);
