// const simpleRepo = require("../simple-repo/simple-repo");
const repository = require("../repository/repository");

function applyRoutes(server) {
  // non-ORM approach
  // server.get("/product/:id", function(req, res) {
  //   simpleRepo.functionalities.fetchProduct(req.params.id, function(result) {
  //     res.send(200, result);
  //   });
  // });
  //
  // server.get("/product", function(req, res) {
  //   simpleRepo.functionalities.fetchProducts(function(result) {
  //     res.send(200, result);
  //   });
  // });
  //
  // server.post("/product", function(req, res) {
  //   simpleRepo.functionalities.saveProduct(req.body, function(result) {
  //     res.send(200, result);
  //   });
  // });

  // ORM approach


}

module.exports = {
  applyRoutes: applyRoutes
};