const { Schema, model} = require('mongoose')

const UsaurioSchema = Schema({

    nombre : {
        type :String,
        require : true
    },
    email : {
        type :String,
        require : true,
        unique : true
    },
    password : {
        type :String,
        require : true
    },
    img : {
        type :String
        
    },
    rol : {
        type :String,
        require : true,
        default : 'USER_ROLE'
    },
    google : {
        type: Boolean,
        default : false
    },
})

UsaurioSchema.method('toJSON', function(){
    const {__v,_id,password, ...object} = this.toObject();
    object.uid = _id
    return object
})

module.exports = model('Usuario', UsaurioSchema)