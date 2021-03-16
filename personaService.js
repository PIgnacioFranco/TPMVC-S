// personaService.js

const personaModel = require('../models/perona');

module.exports = {
	guardar: async persona => {
		let id = await personaModel.guardarUnaPersona(persona);
		persona.id = id;
		console.log('id que trajo de model: ', id);
		console.log('id que le pongo a la persona: ', persona.id);
		return persona;
	},
	
	listarPersona: async () => {
		let listaDePersonas = await personaModel.traerTodasLasPersonas();
		return listaDePersonas;
	},
	traerUnaPersona: asyn id => {
		let persona = await personaModel.traerUnaPersona();
		return persona;
	},
	modificarPersona: async (id,mail.edad) => {
		let resultado = await personaModel.modificarPersona(id,edad,mail);
		
		if(resultado == 1)
			return true;
		else
			return false;
	},
	
	borrarPersona: async id => {
		let resultado = await personaModel.borrarPersona(id);
		
		if(resultado == 1)
			return true;
		else
			return false;
	}
	
}
