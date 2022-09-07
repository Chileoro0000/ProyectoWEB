const { model, Schema } = require("mongoose");

const DatosUserSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  
});

module.exports = model("DatosUser", DatosUserSchema);