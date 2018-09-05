const restify = require('restify');

const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.listen(3000, function () {
  console.log("Server is listening...");
});

const productRestService = require("./rest/product-rest-service");
productRestService.applyRoutes(server);