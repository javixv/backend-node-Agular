const { response } = require('express')
const res = require('express/lib/response')
const Usuario = require('../models/usuarios')

const getUsuarios = async (req, res = response)=> {

    const usuarios = await Usuario.find()

        res.json({
            ok : true,
            usuarios
        })
    
    }

    const crearUsuarios = async (req, res = response) => {

        const {email,password,nombre} = req.body

        try{
        const usaurio = new Usuario(req.body)

        const emailexiste = Usuario.find(email)

        if(emailexiste){
            return res.status(400).json({
                ok : false,
                msj : 'Error este email ya esta registrado en la base de datos'
            })
        }

        await usaurio.save()

        res.json({
            ok : true,
            usaurio
        })

        }catch(error){
            console.log(error)
            res.status(500).json({
                ok : false,
                msj : 'Error algo inesperado a pasado'
            })
        }

        
    
    }



    module.exports = {
        getUsuarios,
        crearUsuarios
    }