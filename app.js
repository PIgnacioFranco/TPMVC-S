// app.js
// la lógica de ruteo

const express = require('express');
const util = require('util');
const personaController = require('./Controllers/personaController');
const app = express();

app.use(express.urlencoded());

app.post ('/persona', async (req,res) => {
	try {
		if(!req.body.nombre || !req.body.apellido || !req.body.nickname || !req.body.edad || !req.body.email)
			throw 'Error en los parametros requeridos';
			
		let persona = {
			nombre: req.body.nombre,
			apellido: req.body.apellido,
			nickname: req.body.nickname,
			edad: req.body.edad,
			email: req.body.email
		}
		
		let personaNueva = await personaController.guardarUnaPersona(persona);
		
		res.send('La persona se creo satisfactoriamente, su id asignado es: ') + personaNueva.id;
	}
	catch(error) {
		console.log('Se produjo el siguiente error: ', error);
		res.sendStatus(422).send("Se produjo el siguiente error: " + error);
	}
})