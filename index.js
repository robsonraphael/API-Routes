const http = require('http');
const fs = require('fs');


http.createServer((request, response) => {
  if (request.url === '/') {
    fs.readFile('index.html', (error, data) => {
      if (error) {
        response.writeHead(400, { "Content-Type": "text/plain" });
        response.write(error);
        console.log(error);
        return response.end();
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    })
  }
  if (request.url === '/about') {
    fs.readFile('about.html', (error, data) => {
      if (error) {
        response.writeHead(400, { "Content-Type": "text/plain" });
        response.write(error);
        console.log(error);
        return response.end();
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    })
  }
  if (request.url === '/contact') {
    fs.readFile('contact.html', (error, data) => {
      if (error) {
        response.writeHead(400, { "Content-Type": "text/plain" });
        response.write(error);
        console.log(error);
        return response.end();
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      return response.end();
    })
  }
  if (request.url !== true) {
    fs.readFile('404.html', (error, data) => {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    })
  }
}).listen(8080, () => {
  console.log("✅ Server is Running...")
});
