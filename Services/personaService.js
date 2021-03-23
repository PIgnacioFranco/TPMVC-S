// personaService.js
/**
Se implementa la lógica de negocios más profunda, se trabaja con los
models y se responde a los controllers. Si fuera requerido realizar cálculos
o transformaciones de datos, aquí sería el lugar donde sucedería. */

const personaModel = require('../models/perona');

module.exports = {
	guardarUnaPersona: async persona => {
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
	traerUnaPersona: async id => {
		let persona = await personaModel.traerUnaPersona(id);
		return persona;
	},
	modificarPersona: async (id,mail,edad) => {
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
