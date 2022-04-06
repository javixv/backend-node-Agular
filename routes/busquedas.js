const { Router} = require('express')
const { check } = require('express-validator')

const{getBuscar, getDocumentosColeccion} = require('../controllers/busquedas')
const { validarJWT } = require('../middlewares/validar-jwt')


const router = Router()

router.get('/:buscar',[validarJWT], getBuscar)

router.get('/coleccion/:tabla/:busqueda', validarJWT , getDocumentosColeccion );

module.exports = router;