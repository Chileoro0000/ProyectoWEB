const Ventas = require("../model/Ventas");

const AddVentas = async (req, res) => {
    const { comprador_id, fecha, total } = req.body;
    const nuevoVenta = new Ventas({
        comprador_id,
        fecha,
        total,
    });
    if (!comprador_id) {
        return res.json({ mensaje: "Mal ingreso" })
    }
    if (total == 0) {
        return res.json({ mensaje: "Mal ingreso" })
    }

    nuevoVenta
        .save()
        .then((Ventas) => {
            res.json({ mensaje: "Venta Añadida Correctamente", Ventas });
        })
        .catch((error) => console.error(error));
}

module.exports = AddVentas;
