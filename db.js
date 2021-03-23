// db.js
/* 
La conexión a la base de datos se realiza en archivo aparte que luego es 
incluída en los diferentes modelos.
*/

const mysql = requier('mysql');
const settings = require ('./settings.json');
const util = require('util');

var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect( err => {
            if (!err)
                console.log('Ya esta conectado la base de datos');
            else
                console.log('Error conectando con la base de datos');
        });
    }
    db.query = util.promisify(db.query);
    return db;
}

module.exports = connectDatabase();