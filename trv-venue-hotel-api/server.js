const jsonServer = require('json-server');
const data = require('./data');

const server = jsonServer.create();
const router = jsonServer.router(data());
const middlewares = jsonServer.defaults();
const port = 3001;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running on port ' + port);
});