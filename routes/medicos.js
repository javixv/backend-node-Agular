const { Router} = require('express')
const { check } = require('express-validator');
const {actualziarMedicos,borrarMedicos,crearMedicos,getMedicos} =  require('../controllers/medicos')

const {validarCampos} = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

router.get('/', getMedicos)

router.post('/',
[
 validarJWT,
 check('nombre','El nombre es requerido').not().isEmpty(),
 check('hospital','El hospital id debe de ser válido').isMongoId(),
 validarCampos
]
,crearMedicos)

router.put( '/:id',
    [
        validarJWT,
        check('nombre','El nombre es requerido').not().isEmpty(),
        check('hospital','El hospital id debe de ser válido').isMongoId(),
        validarCampos
    ],actualziarMedicos
);

router.delete('/:id',validarJWT, borrarMedicos)

module.exports = router;