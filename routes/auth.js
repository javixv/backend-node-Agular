const { Router} = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');



const router = Router();


router.post('/',[
        check('email','Email requerido').isEmail(),
        check('password','Password requerido').not().isEmpty(),
        validarCampos
],
login
)

module.exports = router;