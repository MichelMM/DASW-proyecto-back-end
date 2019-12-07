const express = require('express');
const router = express.Router();
const Contratistas = require('../db/contratistas')

router.route('/')
    .get((req, res) => {
        Contratistas.find()
            .then(contratistas => {
                res.statusCode = 200;
                res.send(contratistas);
            })
            .catch(reason => {
                res.statusCode = 500;
                res.end();
            });
    })

    .post(async function (req, res) {
        let newContratista = req.body;
        console.log(req.body);
        // Validar si vienen las propiedades
        if(!newContratista.name) {
            res.statusCode = 400;
            res.send('Las propiedades requeridas son: name');
        }
        else {
            // Validar si existe un usuario con el mismo correo o names y apellidos
            let sameName = await Contratistas.find({name: newContratista.name});
             if(sameName.length > 0) {
                res.statusCode = 400;
                res.send('Ya existe un contratista con el mismo name');
            }
            else {
                let ContratistaDocument = Contratistas(newContratista);
                ContratistaDocument.save()
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
    ;
module.exports = router;