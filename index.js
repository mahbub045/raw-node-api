// dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

//  create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`server is listening on port ${app.config.port}`);
  });
};

// handle request response
app.handleReqRes = (req, res) => {
  res.end('Hello World! Welcome to my server.');
};

// start the server
app.createServer();
