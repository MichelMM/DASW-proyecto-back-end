const express = require('express');
const router = express.Router();
//const fs = require('fs');
const Products = require('../db/products');

console.log(Products);
router.route('/')
    .get((req, res) => {
        Products.find()
            .then(products => {
                res.statusCode = 200;
                console.log(products);
                res.send(products);
            })
            .catch(reason => {
                res.statusCode = 500;
                res.end();
            });
    });

module.exports = router;