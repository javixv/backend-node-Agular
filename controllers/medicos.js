const { response} = require('express')

const Medico = require('../models/medico');

const getMedicos =  async(req, res = response) => {

    const medico = await Medico.find({}).populate('usuario','nombre img')
                                        .populate('hospital','nombre img')
    res.status(200).json({
        ok :true,
        medico
    })
}

const crearMedicos = async (req, res = response) => {

    const uid = req.uid;
    const medico = new Medico({
        usuario: uid,
        ...req.body
    });


    try {

        const medicoDB = await medico.save();

        
        res.json({
            ok: true,
            medico: medicoDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}


const actualziarMedicos = async (req, res = response) => {

    const id = req.params.id
    try {

        const medicosDb = Medico.findById(id)
        if(!medicosDb){
            return res.status(404).json({
                ok :false,
                msj : 'Datos no encontrados'
            })
        }

        const datosAct = {
            ...req.body
        }
        
        const updateMedicos = await Medico.findByIdAndUpdate(id, datosAct,{new : true})

        res.status(200).json({
            ok :true,
            msj : 'Datos actualizados con existo',
            datosAct
        })
    } catch (error) {
        res.status(500).json({
            ok :false,
            msj : 'Error al actualizar datos de medicos'
        })
    }
    
}

const borrarMedicos = async (req, res = response) => {

    const id = req.params.id
    try {

        const medicosDb = Medico.findById(id)
        if(!medicosDb){
            return res.status(404).json({
                ok :false,
                msj : 'Datos no encontrados'
            })
        }
       
        await Medico.findByIdAndDelete(id)

        res.status(200).json({
            ok :true,
            msj : 'Datos eliminados con existo'
        })
    } catch (error) {
        res.status(500).json({
            ok :false,
            msj : 'Error al actualizar datos de medicos'
        })
    }
}


module.exports = {
    getMedicos,
    crearMedicos,
    borrarMedicos,
    actualziarMedicos
}

