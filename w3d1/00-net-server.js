// Net Server!

// Server => Listener / Trigger Events
// Client => Snek Client

// Callback

// SetTimeout
// Trigger event of 'done' after x ms

const net = require("net"); // Require (or import) the "net" package from Node

const server = net.createServer((connection) => {
  console.log("A new client connected!");
  connection.setEncoding("utf-8")

  connection.write("Hello ! (⌐■_■)");

  connection.on("data", data => connection.write(`🦜: ${data}`))
  connection.on("data", data => console.log(data))
});


server.listen(1337)



// const client = net.createConnection()

// GET / HTTP/1.1
// Host: localhost:1337
// Connection: keep-alive
// Cache-Control: max-age=0
// sec-ch-ua: "Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Windows"
// Upgrade-Insecure-Requests: 1
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
// Sec-Fetch-Site: none
// Sec-Fetch-Mode: navigate
// Sec-Fetch-User: ?1
// Sec-Fetch-Dest: document
// Accept-Encoding: gzip, deflate, br, zstd
// Accept-Language: fr-CA,fr;q=0.9,en-CA;q=0.8,en;q=0.7,fr-FR;q=0.6,en-US;q=0.5,la;q=0.4
// Cookie: default-theme=ngax