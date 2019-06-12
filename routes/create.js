//1. Importaciones /Requerimientos
const express = require('express')

const app = express();

//3. Modelos
const { Burguer, Drinks, Desayuno, Complementos } = requiere('./models/Product.js');

//4.rutas
app.get('/burger', (req, res) => {
    Burger.find({}, (err, burger) => {
        if (err) {
            return err;
        }
        res.send(burger);
    });
});