var express = require('express');
var router = express.Router();
var baseDeDatos = require('../conexion/conexion')

/* GET home page /(productos.ejs) */
router.get('/', function(req, res, next) {
    baseDeDatos.query('SELECT * FROM tblproductos', (err, resultado) => {
        if (err) {
            console.log(err);
        }
        console.log(resultado);
        res.render('productos', { title: 'Productos', Producto: resultado });
    });

});


module.exports = router;