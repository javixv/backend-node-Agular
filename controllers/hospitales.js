const { response} = require('express')

const Hospital = require('../models/hospital')

const getHospitales = (req, res = response) => {

    res.status(200).json({
        ok :true,
        msj : 'getHospitales'
    })
}

const crearHospitales = async (req, res = response) => {
    const uid = req.uid
    const hospital = new Hospital({usuario : uid, ...req.body})

    try {
    
    const hospitalDB = await hospital.save()

    res.status(200).json({
        ok :true,
        hospital : hospitalDB
    })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok :true,
            msj : 'algo salio mal :('
        })
    }
    
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

