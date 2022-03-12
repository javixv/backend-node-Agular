const { response } = require('express')
const bcrypt = require('bcryptjs')
const Usuarios = require('../models/usuarios')
const { generarJWT } = require('../helpers/jwt');

const login =  async ( req, res = response) => {

    const {email, password} = req.body
    try{

        //verificar email
        const usuarioDB = await Usuarios.findOne({email})
        if(!usuarioDB){
           return res.status(404).json({
                ok: false,
                msj : 'usuario o contraseña invelidos'
            })
        }

        //verificar contraseña
        const validPassword = bcrypt.compareSync(password, usuarioDB.password)
        if(!validPassword ){
            return res.status(400).json({
                ok : false,
                msj : 'email ó contraseña invalidos'
            })
        }

        // Generar el TOKEN - JWT
        const token = await generarJWT( usuarioDB.id );

        res.status(200).json({
            ok : true,
            token
        })
    }catch(error){
       return res.status(500).json({
            ok: false,
            msj :  "error"
        })
    }

}

module.exports = {
    login
}