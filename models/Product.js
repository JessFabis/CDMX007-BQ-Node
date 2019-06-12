//1.importaciones/ Requerimientos
const mongoose = require('mongoose')

//2.Schema /Esquema

const productSchema = mongoose.Schema({
    num: {
        type: String,
        required: true,
        unique: 1
    },
    name: {
        type: String,
        required: true,
        unique: 1
    },
    price: {
        type: Number,
        required: true,
        unique: 1
    },
    img: {
        type: String,
        required: true,
        unique: 1
    }
})

//3. Conversion a modelo /Model Conversion
const Burger = mongoose.model('Product', productSchema, 'hamburguesas'); // nombre del modelo(bautizado), el esquema , nombre de la coleccion
const Drinks = mongoose.model('Product', productSchema, 'bebidas');
const Breakfast = mongoose.model('Product', productSchema, 'desayuno');
const Complements = mongoose.model('Product', productSchema, 'complementos');


//4. Exportacion

module.exports = { Burger, Drinks, Breakfast, Complements }