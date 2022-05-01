const { Router} = require('express')
const { check } = require('express-validator')
const {actualziarHospitales, borrarHospitales,crearHospitales,getHospitales} = require('../controllers/hospitales')

const {validarCampos} = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router()

router.get('/', getHospitales)

router.post('/',
[
    validarJWT,
    check('nombre','El nombre es necesario').not().isEmpty(),
    validarCampos

]
, crearHospitales)

router.put( '/:id',
    [
        validarJWT,
        check('nombre','El nombre es necesario').not().isEmpty(),
        validarCampos
    ],
    actualziarHospitales
);

router.delete('/:id',validarJWT, borrarHospitales)

module.exports = router;