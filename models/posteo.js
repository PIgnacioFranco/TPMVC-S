



const conexion = require('../db.js');

module.export = {
    modificarEstadoAnimo: async estado => {
        let resultado = await conexion.query (
            'UPDATE animo set estado = ? ', [estado]);
    }
}