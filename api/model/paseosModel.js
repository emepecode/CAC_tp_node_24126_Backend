const database = require("../data/db");

const { DataTypes } = require("sequelize");

// const paseadoresModel = require("./paseadoresModel")

const paseosModel = database.define("paseos", { //nombre de la tabla
    idPaseo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    dias: { type: DataTypes.STRING },
    hora_inicio: { type: DataTypes.INTEGER },
    hora_fin: { type: DataTypes.INTEGER },
    recorrido: { type: DataTypes.STRING },
    estado: {
        type: DataTypes.STRING,
        defaultValue: 'por realizar'
    },
    paseador_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'paseadoresModel', // Nombre del modelo de los paseadores
            key: 'id'
        }
    }

}, { tableName: 'paseos' });

/* 

// definir la relacion
paseadoresModel.hasMany(paseosModel, {
    foreignKey: "paseador_id", 
    as: "paseos"
}) // estamos asignando el alias 'paseos' a esta relación. Esto te permite acceder a los paseos de un paseador utilizando el alias 'paseos'.


paseosModel.belongsTo(paseadoresModel,{
    foreignKey: 'paseador_id',
    as: 'paseador'
})
 */

module.exports = paseosModel;