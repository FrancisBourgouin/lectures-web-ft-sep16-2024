const pg = require("pg");
let client;

const connectToDB = (connectionInfo) => {
  client = new pg.Client(connectionInfo);

  return client.connect();
};

const runQuery = (queryStr, queryArgs) => {
  return client.query(queryStr, queryArgs).then((res) => res.rows);
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
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
`;
// const queryArgs = [process.argv[2], process.argv[3], process.argv[4], process.argv[5]]
const queryArgs = [...process.argv].slice(2)


connectToDB(connectionInfo)
  .then(() => runQuery(queryStr, queryArgs))
  .then(console.log)
  .then(closeConnection)
  .catch(catchTheBooBoo);
