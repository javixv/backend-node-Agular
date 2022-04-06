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


const actualziarMedicos = (req, res = response) => {

    res.status(200).json({
        ok :true,
        msj : 'actualziarMedicos'
    })
}

const borrarMedicos = (req, res = response) => {

    res.status(200).json({
        ok :true,
        msj : 'borrarMedicos'
    })
}


module.exports = {
    getMedicos,
    crearMedicos,
    borrarMedicos,
    actualziarMedicos
}

