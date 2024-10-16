// SELECT * FROM authors

const pg = require("pg");

const client = new pg.Client({
  host: "localhost",
  user: "labber",
  password: "labber",
  database: "jokes_sep16",
});

client
  .connect()
  .then(() => client.query("SELECT * FROM authors"))
  .then((res) => res.rows.forEach(displayAuthor))
  .then(() => client.end())
  .catch((err) => console.log("OH NO", err));

const authorExample = {
  id: 1,
  name: "Francis",
  funny: true,
  description: "Oh boy, he is a teacher",
};

const displayAuthor = (authorObj) => {
  let output = "";
  output += "***\n";
  output += `Name: ${authorObj.name}, they're ${
    authorObj.funny ? "funny" : "not funny"
  }\n`;
  output += "***\n\n";

  console.log(output);
};
