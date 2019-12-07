const express = require('express');
const router = express.Router();
const Maquinaria = require('../db/maquinaria')

router.route('/')
    .get((req, res) => {
        Maquinaria.find()
            .then(maquinaria => {
                res.statusCode = 200;
                res.send(maquinaria);
            })
            .catch(reason => {
                res.statusCode = 500;
                res.end();
            });
    })

    .post(async function (req, res) {
        let newMaquinaria = req.body;
        console.log(req.body);
        // Validar si vienen las propiedades
        if(!newMaquinaria.model) {
            res.statusCode = 400;
            res.send('Las propiedades requeridas son: name');
        }
        else {
            // Validar si existe un usuario con el mismo correo o names y apellidos
            let sameModel = await Maquinaria.find({model: newMaquinaria.model});
             if(sameModel.length > 0) {
                res.statusCode = 400;
                res.send('Ya existe una maquina con ese modelo');
            }
            else {
                let MaquinariaDocument = Maquinaria(newMaquinaria);
                MaquinariaDocument.save()
                    .then(maquinaria => {
                        res.statusCode = 201;
                        res.send(maquinaria);
                    })
                    .catch(reason => {
                        res.statusCode = 500;
                        res.end();
                    });       
            }
        }
    })
    ;
    
module.exports = router;