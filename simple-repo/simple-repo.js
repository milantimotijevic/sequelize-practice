const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  socketPath: '/var/run/mysqld/mysqld.sock',
  user: 'milan',
  password: 'linuxsux',
  database: 'sequelize_practice'
});

db.connect(function(err) {
  if(err) throw err;
  console.log("Connection with DB established...");
});

const functionalities = {};

const fetchProductsAndManufacturersQuery = `SELECT Products.id AS productId, Products.name AS productName, Products.description AS productDescription,
  Manufacturers.id AS manufacturerId, Manufacturers.name AS manufacturerName, Manufacturers.country AS manufacturerCountry
  FROM Products INNER JOIN Manufacturers on Products.manufacturerId = Manufacturers.id`;

functionalities.fetchProduct = function(productId, callback) {
  const sql = fetchProductsAndManufacturersQuery + ` WHERE Products.id = ?`;
  db.query(sql, productId, function(err, result) {
    if(err) throw err;
    callback(result);
  });
};

functionalities.fetchProducts = function(callback) {
  db.query(fetchProductsAndManufacturersQuery, function(err, result) {
    if(err) throw err;
    callback(result);
  });
};

functionalities.saveProduct = function(product, callback) {
  const sql = `INSERT INTO Products(name, description) values('${product.name}', '${product.description}')`;
  db.query(sql, function(err, result) {
    if(err) throw err;
    callback(result);
  });
};

module.exports = {
  functionalities: functionalities
};