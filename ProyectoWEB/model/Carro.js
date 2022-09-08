const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarroSchema = new Schema({
	tipo: {type: String, required: true},
	nombre: {type: String, required: true},
	ingredientes: {type: Array, required: true},
	imagenURL: {type: String, required: true},
	cantidad: {type: Number, required: true},
    precio: {type: Number, required: true},
})

//Se crea un modelo
const Carro = mongoose.model("Carro", CarroSchema)
module.exports = Carro
