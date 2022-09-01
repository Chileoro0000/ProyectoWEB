const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ofertasSchema = new Schema({
	id: Number,
	nombre: String,
	descripcion: Array,
	precio: String,
	descuento: String,
	imagenURL: String
})

//Se crea un modelo
const Ofertas = mongoose.model("Ofertas", ofertasSchema)
module.exports = Ofertas
