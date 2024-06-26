const paseosModel = require("../model/paseosModel");


const paseadoresModel = require("../model/paseadoresModel");

// CREAR OK
const nuevoPaseo = async (req, res) => {
    const paseadorId =  req.params.id;
    const { paseador_id: bodyPaseadorId } = req.body;

    // valida que el id sea identico al de la url
    if(parseInt(paseadorId) !== parseInt(bodyPaseadorId)){
        res.status(400).json({ error: 'El identificador del paseador de la URL no coincide con el del cuerpo de la solicitud'}); 
    }

    try {
        let dias = "";
        let hora_inicio = 0;
        let hora_fin = 0;
        let recorrido = "";
        let estado = 'por realizar';
        let paseador_id = paseadorId;
        const paseador = await paseadoresModel.findByPk(paseadorId);
    

        switch (paseador_id) {
            case "1":
                dias = "Lunes a Viernes";
                hora_inicio = 9;
                hora_fin = 13;
                recorrido = "Parque Sarmiento";
                estado = 'por realizar';
                break;
            case "2":
                dias = "Lunes a Sábado";
                hora_inicio = 8;
                hora_fin = 12;
                recorrido = "Alrededores del Barrio";
                estado = 'por realizar';
                break;
            case "3":
                dias = "Lunes Miércoles y Viernes";
                hora_inicio = 8;
                hora_fin = 14;
                recorrido = "Parque Saavedra";
                estado = 'por realizar';
                break;
            case "4":
                dias = "Lunes a Domingo";
                hora_inicio = 18;
                hora_fin = 21;
                recorrido = "Alrededores del Barrio";
                estado = 'por realizar';
                break;
            case "5":
                dias = "Martes y Jueves";
                hora_inicio = 15;
                hora_fin = 18;
                recorrido = "Parque Sarmiento";
                estado = 'por realizar';
                break;
        }

        const paseoCreado = await paseosModel.create({
            dias,
            hora_inicio,
            hora_fin,
            recorrido,
            estado,
            paseador_id: paseador.id
        });
        res.status(201).json(paseoCreado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el paseo' });
    }
}

//  mostrar paseos del paseador específico GET OK
const paseosAsignados = async (req, res) => {
    const { id } = req.params;
    const paseadorId = id;

    try {
        const paseos = await paseosModel.findAll(
            {
                where:
                    {paseador_id: paseadorId}
            });

        if (!paseos) {
            return res.status(404).json({ error: 'Paseos no encontrados' });
        }

        res.status(200).json(paseos);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar los paseos del paseador' });
    }
}; 


//  muestra un paseo por su id (de un paseador especifico) - GET
const mostrarUnPaseo = async (req, res)=>{
    const { id } = req.params;
    const paseadorId = id;
    const paseoId = req.params.idPaseo;

    try {
        const paseo = await paseosModel.findOne({where:
            {
                idPaseo: paseoId,
                paseador_id: paseadorId
            }
        })

        if (!paseo) {
            return res.status(404).json({ error: 'Paseo no encontrado' });
        }
        res.status(200).json(paseo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al buscar los paseos del paseador' });
    }
} 






// UPDATE PUT para actualizar estado del paseo "por realizar" a "realizado" OKK
const estadoPaseo = async (req, res) => {
    const {idPaseo} = req.params; // Obtener el ID del paseo desde la URL
    const {estado} = req.body;
    try {
        const paseo = await paseosModel.findByPk(idPaseo);

        if (!paseo) {
            return res.status(404).json({ message: 'Paseo no encontrado' });
        }


        await paseosModel.update({estado}, {
            where:
            {
                idPaseo,
                estado: "por realizar"
            }
        })
        res.status(200).json({ message: 'Estado del paseo actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el estado del paseo' });
    }
};  

// para cancelar paseo
const cancelarPaseo = async (req, res) => {
    try {
        await paseosModel.destroy(
            {
                where: {
                    idPaseo: req.params.idPaseo
                }
            }
        )
        res.status(200).json({ message: 'Paseo cancelado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al cancelar el paseo' });
    }
}; 


module.exports = { nuevoPaseo, paseosAsignados, mostrarUnPaseo, estadoPaseo, cancelarPaseo };
