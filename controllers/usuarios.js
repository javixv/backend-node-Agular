const { response } = require('express')
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt');

const res = require('express/lib/response')
const Usuario = require('../models/usuarios')

const getUsuarios = async (req, res = response)=> {

    const desde = Number(req.query.desde)|| 0
    //console.log(desde)
    //const usuarios = await Usuario.find().skip(desde).limit(5)
    //const total = await Usuario.count();

    const [usuarios,total] = await Promise.all([
        Usuario.find().skip(desde).limit(5),
        Usuario.count()
    ])

        res.json({
            ok : true,
            usuarios,
            total
        })
    
    }

    const crearUsuarios = async (req, res = response) => {

        const { email, password } = req.body;
        

        try{
        

        const existeEmail = await Usuario.findOne({ email });
            //console.log(emailexiste)
        if(existeEmail){
            return res.status(400).json({
                ok : false,
                msj : 'Error este email ya esta registrado en la base de datos'
            })
        }

        const usuarios = new Usuario(req.body)


        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuarios.password = bcrypt.hashSync(password, salt)

        //Guardar usuario
        await usuarios.save()

        const token = await generarJWT( usuarios.id );
        res.json({
            ok : true,
            usuarios,
            token
        })

        }catch(error){
            console.log(error)
            res.status(500).json({
                ok : false,
                msj : 'Error algo inesperado a pasado'
            })
        }

        
    
    }

    const actualizarUsuario = async (req, res = response) => {

        // TODO: Validar token y comprobar si es el usuario correcto
    
        const uid = req.params.id;
    
    
        try {
    
            const usuarioDB = await Usuario.findById( uid );
    
            if ( !usuarioDB ) {
                return res.status(404).json({
                    ok: false,
                    msg: 'No existe un usuario por ese id'
                });
            }
    
            // Actualizaciones
            const { password, google, email, ...campos } = req.body;
    
            if ( usuarioDB.email !== email ) {
    
                const existeEmail = await Usuario.findOne({ email });
                if ( existeEmail ) {
                    return res.status(400).json({
                        ok: false,
                        msg: 'Ya existe un usuario con ese email'
                    });
                }
            }
            
            campos.email = email;
            const usuarioActualizado = await Usuario.findByIdAndUpdate( uid, campos, { new: true } );
    
            res.json({
                ok: true,
                usuario: usuarioActualizado
            });
    
            
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Error inesperado'
            })
        }
    
    }

    const borrarUsuario = async (req, res = response) => {

        const uid = req.params.id;
        try{
            const usuarioDB = await Usuario.findById( uid );
    
            if ( !usuarioDB ) {
                return res.status(404).json({
                    ok: false,
                    msg: 'No existe un usuario por ese id'
                });
            }

            await Usuario.findByIdAndDelete(uid)

            return res.status(200).json({
                ok: true,
                msj : 'usaurio eliminado'
            })

        }catch(error){}
        console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Error inesperado'
            })
    }


    module.exports = {
        getUsuarios,
        crearUsuarios,
        actualizarUsuario,
        borrarUsuario
    }