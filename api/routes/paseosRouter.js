const express = require("express");
const router = express.Router({ mergeParams: true }); // mergeParams es necesario para acceder a los parámetros de los padres


const {nuevoPaseo, paseosAsignados, mostrarUnPaseo, estadoPaseo, cancelarPaseo} = require("../controllers/paseosController");

router.post("/", nuevoPaseo); // crea un paseo nuevo para el paseador específico
router.get("/", paseosAsignados); //  paseos del paseador específico
router.get("/:idPaseo", mostrarUnPaseo) //  muestra un paseo
router.put("/:idPaseo", estadoPaseo);  // para actualizar estado del paseo "por realizar" o "finalizado"
router.delete("/:idPaseo", cancelarPaseo); // para cancelar paseo



module.exports = router;