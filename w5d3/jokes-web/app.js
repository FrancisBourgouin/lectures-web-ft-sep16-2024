const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const { selectAllAuthors, selectAuthorById } = require("./db/authors");
const { selectAllJokes, selectJokeById, insertJoke } = require("./db/jokes");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// START OF ROUTES

app.get("/api/authors", (req, res) => {
  selectAllAuthors()
    .then((authors) => {
      res.json(authors);
    })
    .catch((err) => res.json(err));
});

app.get("/api/authors/:author_id", (req, res) => {
  selectAuthorById(req.params.author_id)
    .then((author) => {
      res.json(author);
    })
    .catch((err) => res.json(err));
});

app.get("/api/jokes", (req, res) => {
  selectAllJokes()
    .then((jokes) => {
      res.json(jokes);
    })
    .catch((err) => res.json(err));
});

app.get("/api/jokes/:joke_id", (req, res) => {
  selectJokeById(req.params.joke_id)
    .then((jokes) => {
      res.json(jokes);
    })
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  selectAllJokes()
    .then((jokes) => {
      const templateVars = { jokes };
      res.render("index", templateVars);
    })
    .catch((err) => res.json(err));
});

app.get("/jokes/new", (req, res) => {
  selectAllAuthors()
    .then((authors) => {
      const templateVars = { authors };
      return res.render("new-joke", templateVars);
    })
    .catch((err) => res.json(err));
});

app.get("/jokes/:joke_id", (req, res) => {
  selectJokeById(req.params.joke_id)
    .then((joke) => {
      const templateVars = { joke };
      res.render("joke", templateVars);
    })
    .catch((err) => res.json(err));
});

app.post("/jokes", (req, res) => {
  console.log(req.body)
  insertJoke(req.body)
    .then((joke) => {
      console.log("inserted joke successfully", joke);

      res.redirect(`/jokes/${joke.id}`);
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    });
});

// END OF ROUTES

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
