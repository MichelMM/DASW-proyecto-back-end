const mongoose = require('./mongodb-connect')

let contratistasSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    personalAdd:{
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        CP: {
            type: String,
            required: true
        }
    },
    companyAdd:{
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        CP: {
            type: String,
            required: true
        }
    },
    companyName: {
        type: String,
        required: true
    },
    payInfo: {
        type: String,
        required: true
    },
    rfc: {
        type: String,
        required: true
    },
    user:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

contratistasSchema.statics.addContratista = function(user) {
    console.log(user);
    let newUser = User(user);
    return newUser.save();
}

let contratistas = mongoose.model('contratistas', contratistasSchema);

module.exports = contratistas;