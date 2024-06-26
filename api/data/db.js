const {Sequelize} = require("sequelize");

const database = new Sequelize("paseadores", "root", "", {
    host: "localhost", 
    dialect: "mysql",
    port: 3307,
});

module.exports = database;