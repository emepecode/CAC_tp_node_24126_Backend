// Importa y configura dotenv
require("dotenv").config();

const { Sequelize } = require("sequelize");

const database = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    }
);

module.exports = database;