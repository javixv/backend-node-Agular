const { response} = require('express')


const getMedicos = (req, res = response) => {

    res.status(200).json({
        ok :true,
        msj : 'getMedicos'
    })
}

const crearMedicos = (req, res = response) => {

    res.status(200).json({
        ok :true,
        msj : 'crearMedicos'
    })
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

