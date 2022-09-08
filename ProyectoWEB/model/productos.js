const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productosSchema = new Schema({
	tipo: {type: String, required: true},
	nombre: {type: String, required: true},
	ingredientes: {type: Array, required: true},
	precio: {type: Number, required: true},
	imagenURL: {type: String, required: true},
	EnCarro: {type: Boolean, default: false},
})


//Se crea un modelo
const Producto = mongoose.model("Producto", productosSchema)
module.exports = Producto
