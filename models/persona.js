//persona.js -- models
/**
 * Realiza las consultas a la base de datos y devuelve la información
 */
const conexion = require('../db.js');

module.exports = {
	guardarUnaPersona: async persona => {
		let resultado = await conexion.query(
			'INSERT INTO persona (nombre, apellido. nickname, edad, email) VALUES (?,?,?,?,?)',
			[persona.nombre, persona.apellido, persona.nickname, persona.edad, persona.email]);
		
		return result.insertId;
	},
	traerUnPersona: async id => {
		let unaPersona = await conexion.query(
			'SELECT * FROM persona WHERE id=?', [id]);
			
		return unaPersona[0];
	},
	traerTodasLasPersonas: async () => {
		let listadoPersonas = await conexion.query (
			'SELECT * FROM personas');
			
		return listadoPersona;	
	},
	modificarPersona: async (id, edad, email) => {
		let resultado = await conexion.query(
			'UPDATE persona set edad=?, email=? WHERE id=?',
			[edad, mail, id]);
			
		return resultado.changeRown;
	},
	borrarPersona: async id => {
		let fecha = new Date();
		let resultado = await conexion.query('UPDATE persona SET deleted = ?, date_delete = ? WHERE id = ?', [persona.delete, fecha, persona.id]);
		}		
}
