const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productosSchema = new Schema({
	id: Number,
	tipo: String,
	nombre: String,
	ingredientes: Array,
	imagenURL: String,
	EnCarro: {type: Boolean, default: false}
})


//Se crea un modelo
const Producto = mongoose.model("Producto", productosSchema)
module.exports = Producto
