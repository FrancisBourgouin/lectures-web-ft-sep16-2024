const user1 = {
  id: 1,
  name: "Leon Semionovitch Tolstoi",
  description: "Writes very long novels",
  password: "sacha",
};

const user2 = {
  id: 2,
  name: "Doug Judy",
  description: "Known as the Pontiac Bandit",
  password: "rosa",
};

// const users = [user1, user2];
const users = {
  1: user1,
  2: user2,
};

// Basic express server w/ EJS
const express = require("express");

const app = express(); // Similar to .createServer method from http

const port = 1337;

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.get("/", (req, res) => {
  return res.send("Hello!");
});

app.get("/home", (req, res) => {
  return res.send("Hello!");
});

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/users/new", (req, res) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const templateVars = { currentYear };

  return res.render("new-user", templateVars);
});

app.post("/users", (req, res) => {
  // const id = req.body.id;
  // const name = req.body.name;
  // const description = req.body.description;
  // const password = req.body.password;

  // Object destructuring
  const { id, name, description, password } = req.body;

  if (!users[id]) {
    const newUser = { id, name, description, password };
    users[id] = newUser;
  }

  return res.redirect(`/users/${id}`);
});

app.get("/users/:user_id", (req, res) => {
  const userId = req.params.user_id;
  const user = users[userId];
  const date = new Date();
  const currentYear = date.getFullYear();

  const templateVars = { user, currentYear };

  return res.render("user", templateVars);
});

app.listen(port);
