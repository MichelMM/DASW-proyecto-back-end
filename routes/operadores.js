const express = require('express');
const router = express.Router();
const Operadores = require('../db/operadores')

router.route('/')
    .get((req, res) => {
        Operadores.find()
            .then(operadores => {
                res.statusCode = 200;
                res.send(operadores);
            })
            .catch(reason => {
                res.statusCode = 500;
                res.end();
            });
    })

    .post(async function (req, res) {
        let newOperador = req.body;
        console.log(req.body);
        // Validar si vienen las propiedades
        if(!newOperador.name) {
            res.statusCode = 400;
            res.send('Las propiedades requeridas son: name');
        }
        else {
            // Validar si existe un usuario con el mismo correo o names y apellidos
            let sameName = await Operadores.find({name: newOperador.name});
             if(sameName.length > 0) {
                res.statusCode = 400;
                res.send('Ya existe un usuario con el mismo name');
            }
            else {
                let OperadorDocument = Operadores(newOperador);
                OperadorDocument.save()
                    .then(operador => {
                        res.statusCode = 201;
                        res.send(operador);
                    })
                    .catch(reason => {
                        res.statusCode = 500;
                        res.end();
                    });       
            }
        }
    })

    .put(async function(req, res){
        console.log(req.body);

        if(req.body){
            let operador= await Operadores.findOne({_email:req.body._email});

            operador.name=req.body.name;
            operador.lastname=req.body.lastname;
            operador.mail=req.body.mail;
            operador.licensePDF=req.body.licensePDF;
            operador.officialID=req.body.officialID;
            operador.city=req.body.city;
            operador.state=req.body.state;
            operador.cellphone=req.body.cellphone;
            operador.operatorIMG=req.body.operatorIMG;
            operador.noCRB=req.body.noCRB;
            operador.yearsExperience=req.body.yearsExperience;
            operador.available=req.body.available;
            operador.rfc=req.body.rfc;
            operador.user=req.body.user;
            operador.password=req.body.password;
            operador.type=req.body.type;
            operador.previousJob1.company=req.body.previousJob1.company;
            operador.previousJob1.referenceContact.name=req.body.previousJob1.referenceContact.name;
            operador.previousJob1.referenceContact.cellphone=req.body.previousJob1.referenceContact.cellphone;
            operador.previousJob2.company=req.body.previousJob2.company;
            operador.previousJob2.referenceContact.name=req.body.previousJob2.referenceContact.name;
            operador.previousJob2.referenceContact.cellphone=req.body.previousJob2.referenceContact.cellphone;
            operador.previousJob3.company=req.body.previousJob3.company;
            operador.previousJob3.referenceContact.name=req.body.previousJob3.referenceContact.name;
            operador.previousJob3.referenceContact.cellphone=req.body.previousJob3.referenceContact.cellphone;
            operador.machinesOperated=req.body.machinesOperated;
            operador.recomendationCard=req.body.recomendationCard;
            operador.description=req.body.description;
            await operador.save();

            res.statusCode=200;
            res.send(req.body);
        }
        else{
            res.satusCode=401;
            res.send("Error al actualizar datos")
        }
    })
    ;
module.exports = router;