// Net package vs HTTP package

// HTTP : HyperText Transfer Protocol

// It works by receiving a request and sending a response, for every request

// What do you want to do

// /users/create
// /users/1/update
// /users/1/delete

// HTTP METHODS

// POST /users => POST CONTENT / CREATE SOMETHING
// GET /users => GET SOMETHING / RETRIEVE
// PUT/PATCH /users/1 => UPDATE SOMETHING
// DELETE /users/1 => DELETE SOMETHING


// HTTP RESPONSE CODES

// 20x => OK
// 300 => Redirect
// 400 => User fudged up (418 BEST!!!!)
// 500 => Server fudged up

const http = require('http');

// Create a local server to receive data from
const server = http.createServer((request, response) => {
  response.writeHead(418, { 'Content-Type': 'text/html' });

  response.end("<h1>I AM A HEADING 1 TAG YEAH!</h1>");
});

server.listen(8000);