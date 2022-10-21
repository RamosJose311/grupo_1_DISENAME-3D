var express = require('express');
var router = express.Router();

const {crearProducto,editarProducto, add, store, update, destroy} = require('../controllers/adminController');
const productValidator = require('../validations/productsValidator')
const adminSessionCheck = require ('../middlewares/adminSessionCheck')

/* /admin */

router
    .get('/crearProducto',adminSessionCheck,crearProducto)
    .post('/add', productValidator,store)

    .get('/editarProducto/:id',adminSessionCheck, editarProducto)
    
    
    
    .put('/update/:id', productValidator, update)

    //.get('/add',adminSessionCheck,add)
    
    //.get('/add',adminSessionCheck,add)

    //.post('/add',store)

    
    .delete('/delete/:id', destroy)

module.exports = router;