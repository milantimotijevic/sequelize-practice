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

sequelize.sync({force: true}).then(function() {
  console.log("Tables have been created");
});


function bootstrapData() {
  // will get called 5 sec after running the app, plenty of time to setup all entities (tables)
  // simply adds some entries into DB
  Manufacturer.create({
    name: "Sticks and stones",
    country: "USA"
  }).then(function(newManufacturer) {

  });
  Product.create({
    name: "Broomstick",
    description: "Used for swiping floors"
  });
}

setTimeout(bootstrapData, 5000);