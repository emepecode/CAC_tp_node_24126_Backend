const database = require("../data/db");

const {DataTypes} = require("sequelize");


const paseadoresModel = database.define("paseadores", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {type: DataTypes.STRING}
    },
    {
        tableName: 'paseadores'
    });



    
module.exports = paseadoresModel;