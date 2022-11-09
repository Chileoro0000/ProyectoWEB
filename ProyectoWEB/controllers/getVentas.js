const Ventas = require("../model/Ventas");

const getVentas = async (req, res) => {
  const ventas = await Ventas.find();
  
  if (ventas) {
    res.json({ ventas });
  } else {
    res.json({ mensaje: "No hay ventas" });
  }
};
  module.exports = getVentas;