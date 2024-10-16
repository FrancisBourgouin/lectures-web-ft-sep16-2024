const pg = require("pg");
let client;


const jokeId = process.argv[2]

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
SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.description AS author_description,
  authors.funny AS author_funny
FROM jokes
LEFT JOIN authors
  ON authors.id = jokes.author_id
WHERE jokes.id = $1
;
`;
const queryArgs = [jokeId, 5]


connectToDB(connectionInfo)
  .then(() => runQuery(queryStr, queryArgs))
  .then(console.log)
  .then(closeConnection)
  .catch(catchTheBooBoo);
