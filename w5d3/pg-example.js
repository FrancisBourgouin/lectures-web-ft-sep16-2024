// import pg from 'pg'
const pg = require("pg");

const pgClient = pg.Client;

const pgOperations = async () => {
  // connecting is synchronous or async ?
  // ASYNC ! :D
  try {
    const client = new pgClient({
      host: "localhost",
      user: "labber",
      password: "labber",
      database: "jokes_sep16",
    });
    await client.connect();

    const res = await client.query("SELECT NOW()");
    await client.end();

    console.log(res);
  } catch (err) {
    console.log("OH NO :(", err);
  }
};

pgOperations();

const pgOpsPromisesButItDoesntNeedToBeInAFunctionHAAHAHAHA = () => {
  const client = new pgClient({
    host: "localhost",
    user: "labber",
    password: "labber",
    database: "jokes_sep16",
  });

  return client
    .connect()
    .then(() => client.query("SELECT NOW()"))
    .then((res) => console.log(res))
    .catch((err) => console.log("OH NO", err));
};
