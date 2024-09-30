// Basic express server wo/ EJS

// Library => Set of tools
// Framework => Set of tools, but it comes with specific instructions

const user1 = {
  id:1,
  name: "Leon Semionovitch Tolstoi",
  description: "Writes very long novels",
  password: "sacha",
};

const user2 = {
  id:2,
  name: "Doug Judy",
  description: "Known as the Pontiac Bandit",
  password: "rosa",
};

// const users = [user1, user2];
const users = {
  1: user1,
  2: user2,
};

const express = require("express");

const app = express(); // Similar to .createServer method from http

const port = 1337;

app.use(express.static("public"))


const someHtml = `
<html>...
`

app.get("/", (req, res) => {
  return res.send("Home!");
});

app.get("/users", (req, res) => {
  // return res.send("Users!");

  // return res.send(JSON.stringify(users))
  
  return res.json(users);
});

app.get("/users/new", (req, res) => {

})

app.get("/users/:user_id", (req, res) => {
  const userId = req.params.user_id; // req.params refer to the parameters in the url (req.params.user_id refers to :user_id)
  const user = users[userId]

  if(user){
    return res.json(user)
  }

  return res.status(404).send("User not found...")
  // return res.send(`The user id specified is: ${userId}`);

});

// Will not be accessed because /users/:user_id will answer to the request first
app.get("/users/1", (req, res) => {
  return res.send("USER ONE FOR THE WIN!")
});
app.get("/users/2", (req, res) => {});

app.listen(port);
