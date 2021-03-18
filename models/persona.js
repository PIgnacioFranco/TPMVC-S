//persona.js -- models

module.expport = {
	guardarUnaPersona: async persona => {
		let resultado = await conexion.query(
			'INSERT INT persona (nombre, apellido. nickname, edad, email) VALUES (?,?,?,?,?)',
			[persona.nombre, persona.apellido, persona.nickname, persona.edad, persona.email]);
		
		return resltado.insertId;
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
