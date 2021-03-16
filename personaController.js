//personaController.js

const personaService = require('../service/personaService');

module.exports =  {
	guardarUnaPersona: async persona => {
		let personaNueva = personaService.guardarUnaPersona(persona);
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
		let resultado = await personaController.modificarPersona(id, mail, edad);
		
		if(resultado)
			persona = await persona.persona.traerUnaPersona(id);
			
		return persona;
	},
};
