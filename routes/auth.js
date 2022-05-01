const { Router} = require('express');
const { check } = require('express-validator');
const { login, renewtoken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');



const router = Router();


router.post('/',[
        check('email','Email requerido!!').isEmail(),
        check('password','Password requerido').not().isEmpty(),
        validarCampos
],
login
)

router.get('/renew',validarJWT,renewtoken)

module.exports = router;