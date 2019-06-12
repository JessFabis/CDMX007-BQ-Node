const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');




const { port, mongoUrl, secret } = config;
const app = express();



// Conectar aplicación a MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) {
        return err;
    } else {
        console.log("conectado con mongo");
    }
});


app.set('config', config);
app.set('pkg', pkg);


app.use(express.json());
app.use(authMiddleware(secret));


// Registrar rutas
routes(app, (err) => {
    if (err) {
        throw err;
    }

    // Registro de "middleware" que maneja posibles errores
    app.use(errorHandler);

    app.listen(port, () => console.log(`App listening on port ${port}`));
});

const { Burger, Drinks, Breakfast, Complements } = require('./models/Product.js');

//4.rutas

//Hamburgesa
app.get('/burger', (req, res) => {
    Burger.find({}, (err, burgers) => {
        if (err) {
            return err;

        } else {

            res.send(burgers);
            console.log(burgers);
        }
    });
});

//Bebidas
app.get('/drinks', (req, res) => {
    Drinks.find({}, (err, drink) => {
        if (err) {
            return err;

        } else {

            res.send(drink);
            console.log(drink);
        }
    });
});

//Desayuno
app.get('/breakfast', (req, res) => {
    Breakfast.find({}, (err, breakfast) => {
        if (err) {
            return err;

        } else {

            res.send(breakfast);
            console.log(breakfast);
        }
    });
});

//Complementos
app.get('/complements', (req, res) => {
    Complements.find({}, (err, complements) => {
        if (err) {
            return err;

        } else {

            res.send(complements);
            console.log(complements);
        }
    });
});