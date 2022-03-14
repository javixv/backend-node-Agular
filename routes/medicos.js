const { Router} = require('express')
const { check } = require('express-validator')
const {actualziarMedicos,borrarMedicos,crearMedicos,getMedicos} =  require('../controllers/medicos')

const {validarCampos} = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

router.get('/', getMedicos)

router.post('/',
[]
, crearMedicos)

router.put( '/:id',
    [],
    actualziarMedicos
);

router.delete('/:id', borrarMedicos)

module.exports = router;