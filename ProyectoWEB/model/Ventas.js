const { model, Schema } = require("mongoose");

const VentasSchema = new Schema({
  comprador_id: { type: String },
  fecha: { type: String },
  total: { type: String},
});

module.exports = model("Ventas", VentasSchema);
