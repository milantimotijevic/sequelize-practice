module.exports = function(sequelize, Sequelize) {
    return sequelize.define('manufacturer', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      country: Sequelize.STRING
    });
};