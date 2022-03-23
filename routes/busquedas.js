const { Router} = require('express')
const { check } = require('express-validator')

const{getBuscar} = require('../controllers/busquedas')
const { validarJWT } = require('../middlewares/validar-jwt')


const router = Router()

router.get('/:buscar',[validarJWT], getBuscar)

module.exports = router;