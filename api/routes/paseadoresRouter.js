const express = require("express");
const router = express.Router();
const paseosRouter = require("./paseosRouter")

const {mostrarPaseadores, mostrarUnPaseador} = require("../controllers/paseadoresController"); // controller



router.get("/", mostrarPaseadores); // muestra paseadores 
router.get("/:id", mostrarUnPaseador); // muestra un paseador y su detalle


router.use('/:id/paseos', paseosRouter);


module.exports = router;