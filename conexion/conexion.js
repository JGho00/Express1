var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ventas'
});
//comprobar conexion
connection.connect(
    (err) => {
        if (!err) {
            console.log("Conexion Exitosa");
        } else {
            console.log("Algo fallo");
            console.log(err);
        }
    }
);
module.exports = connection;
/*connection.query("SELECT * FROM tblproductos", (err, res) => {
    console.log(res);
});*/
//connection.end();