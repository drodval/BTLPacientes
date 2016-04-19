//llamamos al paquete mysql que hemos instalado
var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
	{ 
		host: 'localhost', 
		user: 'root',  
		password: '', 
		database: 'ajax_laravel'
	}
);
 
//creamos un objeto para ir almacenando todo lo que necesitemos
var userModel = {};
 
//obtenemos todos los usuarios
userModel.getUsers = function(callback)
{
	if (connection) 
	{
		connection.query('SELECT * FROM users ORDER BY id', function(error, rows) {
			if(error)
			{
				throw error;
			}
			else
			{
				callback(null, rows);
			}
		});
	}
}
 