// HTTP Server w/ Routing

const http = require("http");

// Create a local server to receive data from
const server = http.createServer((request, response) => {
  console.log(request.method, request.url);

  response.writeHead(418, { "Content-Type": "text/html" });

  if (request.url === "/home") {
    return response.end("<h1>Welcome home!</h1>");
  }
  if (request.url.split("/")[1] === "users") {
    if (request.url.split("/")[2] === "1") {
      return response.end("<h1>Welcome user 1!</h1>");
    }

    return response.end("<h1>Welcome to users!</h1>");
  }

  response.end("<h1>Are you lost?</h1>");
});

server.listen(8000);

// /users/1 !== /users/2
