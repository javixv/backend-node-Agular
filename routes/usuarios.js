const { Router} = require('express')
const { check } = require('express-validator')

const {getUsuarios, crearUsuarios, actualizarUsuario, borrarUsuario} = require('../controllers/usuarios')
const {validarCampos} = require('../middlewares/validar-campos')
const router = Router()

router.get('/', getUsuarios)

router.post('/',
[
    check('nombre','El nombre es obigatorio').not().isEmpty(),
    check('password','El password es obigatorio').not().isEmpty(),
    check('email','El email es obigatorio').isEmail(),
    validarCampos
]
, crearUsuarios)

router.put( '/:id',
    [
       // validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    actualizarUsuario
);

router.delete('/:id', borrarUsuario)

module.exports = router;