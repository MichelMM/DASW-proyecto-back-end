const mongoose = require('./mongodb-connect')

let operadoresSchema = mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    lastname: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    licensePDF: {
        type: String,
        required: true
    },
    officialID: {
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
    cellphone: {
        type: String,
        required: true
    },
    operatorIMG: {
        type: String,
        required: true
    },
    noCRB: {
        type: String,
        required: true
    }, 
    yearsExperience: {
        type: String,
        required: true
    },
    available: {
        type: String,
        required: true
    },
    rfc: {
        type: String,
        required: true
    },
    user: {
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
    previousJob1: {
        company: {
            type: String,
            required: false
        },
        referenceContact: {
            name: {
                type: String,
                required: false
            },
            cellphone: {
                type: String,
                required: false
            }
        }
    },
    previousJob2: {
        company: {
            type: String,
            required: false
        },
        referenceContact: {
            name: {
                type: String,
                required: false
            },
            cellphone: {
                type: String,
                required: false
            }
        }
    },
    previousJob3: {
        company: {
            type: String,
            required: false
        },
        referenceContact: {
            name: {
                type: String,
                required: false
            },
            cellphone: {
                type: String,
                required: false
            }
        }
    },
    machinesOperated: {
        type:Array,
        required: false
    },
    recommendationCard: {
        type:String,
        required: false
    },
    description: {
        type:String,
        required: false
    },
    status: {
        type:String,
        required: true
    }
});

operadoresSchema.statics.addOperador = function(user) {
    console.log(user);
    let newUser = User(user);
    return newUser.save();
}

let operadores = mongoose.model('operadores', operadoresSchema);

module.exports = operadores;