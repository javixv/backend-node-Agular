const { response} = require('express')

const Hospital = require('../models/hospital')

const getHospitales = async (req, res = response) => {

    const hospitales = await Hospital.find({}).populate('usuario','nombre');

    res.status(200).json({
        ok :true,
        hospital :hospitales
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

const actualziarHospitales =  async( req, res = response) => {

    const id = req.params.id
    const uid = req.uid
    try {
        
        const hospitalDB = await Hospital.findById(id)
        if(!hospitalDB){
            return res.status(404).json({
                ok :false,
                msj : 'Hospital no encontrado'    
            })
        }
        
        const cambiosHospital = {
            ...req.body,
            usuario : uid            
        }

        const actHospital = await Hospital.findByIdAndUpdate(id, cambiosHospital, {new : true})

        res.status(200).json({
            ok :true,
            msj : 'Datos Actualizados',
            hospitalID : actHospital
            
        })
    } catch (error) {
        res.status(500).json({
            ok :false,
            msj : 'Error datos no actualizados'
        })
    }
}

const borrarHospitales = async (req, res = response) => {

    const id = req.params.id
    
    try {
        
        const hospitalDB = await Hospital.findById(id)
        if(!hospitalDB){
            return res.status(404).json({
                ok :false,
                msj : 'Hospital no encontrado'    
            })
        }
        
        await Hospital.findByIdAndDelete(id)        

        res.status(200).json({
            ok :true,
            msj : 'Hospital eliminado',
            hospitalID : hospitalDB
            
        })
    } catch (error) {
        res.status(500).json({
            ok :false,
            msj : 'Error datos no actualizados'
        })
    }
}


module.exports = {
    getHospitales,
    crearHospitales,
    borrarHospitales,
    actualziarHospitales
}

