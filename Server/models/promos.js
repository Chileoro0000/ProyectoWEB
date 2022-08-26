const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const promosSchema = new Schema({
	id: Number,
	nombre: String,
	descripcion: Array,
	imagenURL: String
})

const Promos = mongoose.model("Promos", promosSchema)
module.exports = Promos
