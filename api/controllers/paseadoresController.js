const paseadoresModel = require("../model/paseadoresModel");

const mostrarPaseadores = async (req, res) => {
    try {
        const paseadores = await paseadoresModel.findAll();
        res.json(paseadores);
    } catch (error) {
        res.json({message: error.message}); //ver para poner el status
    }
}

const mostrarUnPaseador = async(req,res)=>{
    try {
        const paseador = await paseadoresModel.findByPk(req.params.id);
        res.json(paseador);
    } catch (error) {
        res.json({message: error.message}); //ver para poner el status
    }
}

module.exports = {mostrarPaseadores, mostrarUnPaseador};
