// personaController.js
// Se encarga de verificar la información que será enviada a los services.
// Verifica que los datos obtenidos cumplan con la lógica de negocios.

const personaService = require('../Service/personaService');

module.exports =  {
	guardarUnaPersona: async persona => {
		let personaNueva = await personaService.guardarUnaPersona(persona);
		return personaNueva;
		},

	listaPersonas: async () => {
		let listado = await personaService.listarPersona();
		return listado;
	},
	
	traerUnaPersona: async id => {
		let persona = await personaService.traerUnaPersona(id);
		return persona;
	},

	modificarPersona: async (id,edad,mail) => {
		let persona = NULL;
		let resultado = await personaService.modificarPersona(id, mail, edad);
		
		if(resultado)
			persona = await persona.persona.traerUnaPersona(id);
			
		return persona;
	},
};
