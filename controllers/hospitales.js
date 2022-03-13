const { response} = require('express')


const getHospitales = (req, res = response) => {

    res.status(200).json({
        ok :true,
        msj : 'getHospitales'
    })
}

const crearHospitales = (req, res = response) => {

    res.status(200).json({
        ok :true,
        msj : 'crearHospitales'
    })
}

const actualziarHospitales = (req, res = response) => {

    res.status(200).json({
        ok :true,
        msj : 'actualziarHospitales'
    })
}

const borrarHospitales = (req, res = response) => {

    res.status(200).json({
        ok :true,
        msj : 'borrarHospitales'
    })
}


module.exports = {
    getHospitales,
    crearHospitales,
    borrarHospitales,
    actualziarHospitales
}

