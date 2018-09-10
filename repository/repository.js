const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize_practice', 'milan', 'linuxsux', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

const ProductModel = require("../model/product");
const ManufacturerModel = require("../model/manufacturer");

const Product = ProductModel(sequelize, Sequelize);
const Manufacturer = ManufacturerModel(sequelize, Sequelize);

Manufacturer.hasMany(Product);

// NOTE: it's possible to sync individual tables, or even chain Promises like this, but it's best to call sequelize.sync instead (to sync everything)
// Manufacturer.sync().then(() => {
//   Product.sync().then(() => {
//     console.log("Tables created");
//   });
// });

// sequelize.sync({force: true}).then(bootstrapData);
//NOTE: when fetching actual data from a sequelize object (e.g. product) simply call its 'dataValues' property
Product.findAll().then(function(products) {
  Manufacturer.findAll().then(function(manufacturers) {
    //manufacturers[0].setProducts(products[0]);
  });
});

// updating follows below logic (using 'where' clause)
// Product.update(
//     {description: "placeholder description"},
//     {where: {id: 1}}
// ).then(function(affectedRows) {
//   console.log(affectedRows);
// });


function bootstrapData() {
  Manufacturer.create({
    name: "Sticks and stones",
    country: "USA"
  }).then(function(newManufacturer) {

  });
  Product.create({
    name: "Broomstick",
    description: "Used for swiping floors"
  }).then(function(newProduct) {

  });
}
