const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarroSchema = new Schema({
	nombre: String,
	img: {type: String, required: true},
	monto: {type: Number, required: true},
    precio: {type: Number, required: true},
})

//Se crea un modelo
const Carro = mongoose.model("Carro", ofertasSchema)
module.exports = Carro
