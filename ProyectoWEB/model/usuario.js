const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rut: { type: String, required: false },
  telefono: { type: Number, required: false },
  sexo: { type: String, required: false },
  direccion: { type: String, required: false },
  fecha_nacimiento: { type: String, required: false },
  es_admin: {type: Boolean, require: false, default: false},
  es_cajero: {type: Boolean, require: false, default: false},
});

module.exports = model("Usuario", UsuarioSchema);
