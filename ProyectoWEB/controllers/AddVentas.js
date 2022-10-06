const Ventas = require("../model/Ventas");

const AddVentas = async (req, res) => {
    const { Nombre_id, Fecha, Total } = req.body;
    const nuevoVenta = new Ventas({
        Nombre_id,
        Fecha,
        Total,
    });

    nuevoVenta
        .save()
        .then((Ventas) => {
            res.json({ mensaje: "Venta Añadida Correctamente", Ventas });
        })
        .catch((error) => console.error(error));
}

module.exports = AddVentas;
