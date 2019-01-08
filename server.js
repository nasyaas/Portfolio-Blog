// var http = require("http");

// function onRequest(request, response) {
//   console.log("request made" + request.url);
//   response.writeHead(200, { "Context-Type": "text/plain" });
//   response.write("Here is some data");
//   response.end();
// }

// http.createServer(onRequest).listen(8888);
// console.log("Running...");

// -----------------
// var http = require("http");
// var fs = require("fs");

// //404 response
// function send404Response(response) {
//   response.writeHead(404, { "Content-Type": "text/plain" });
//   response.write("Error 404: Page Not Found");
//   response.end();
// }

// //Handle a user request
// function onRequest(request, response) {
//   if (request.method == "GET" && request.url == "/") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     fs.createReadStream("./app.js").pipe(response);
//   } else {
//     send404Response(response);
//   }
// }

// http.createServer(onRequest).listen(8888);
// console.log("Running...");

var connect = require("connect");
http = require("http");
fs = require("fs");

var app = connect();

function home(request, response) {
  fs.createReadStream("./app.js").pipe(response);
}

function blog1(request, response) {}

app.use("/", home);
app.use("/blog1", blog1);

http.createServer(app).listen(8888);
console.log("Server is running...");
