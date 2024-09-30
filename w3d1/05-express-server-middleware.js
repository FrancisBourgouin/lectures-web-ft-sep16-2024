// Basic express server w/ middleware
const express = require("express");

const app = express(); // Similar to .createServer method from http

const port = 1337;

app.use((req, res, next) => {
  console.log(new Date(), req.path, req.method);

  return next();
});

app.get("/", (req, res) => {
  return res.send("Hello!");
});

app.get("/home", (req, res) => {
  return res.send("Hello!");
});

app.listen(port);
