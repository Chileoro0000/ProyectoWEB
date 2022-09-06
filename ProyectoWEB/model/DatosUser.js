const { model, Schema } = require("mongoose");

const DatosUserSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  rut: { type: String, required: true },
  telefono: { type: Number, required: true },
  sexo: { type: String, required: true },
  dirrecion: { type: String, required: true },
  fecha_de_nacimiento: { type: String, required: true },
});

module.exports = model("DatosUser", DatosUserSchema);