const DatosUser = require("../model/DatosUser");

const actualizarDatos = async (req, res) => {
    const { nombre, correo, rut, telefono, sexo, dirrecion, fecha_de_nacimiento } = req.body;

    if (!nombre || !correo || !rut || !telefono || !sexo || !dirrecion || !fecha_de_nacimiento) {
        return res.json({ mensaje: "Faltan datos" });
    } else {
        if (error) {
            res.json({ error });
        } else {
            const nuevoUsuario = new DatosUser({
                nombre,
                correo,
                rut,
                telefono,
                sexo,
                dirrecion,
                fecha_de_nacimiento,
            });
            nuevoUsuario
                .save()
                .then((nuevoUsuario) => {
                    res.json({ mensaje: "Usuario actualizado correctamente", nuevoUsuario });
                })
                .catch((error) => console.error(error));
        }

    }
};

module.exports = actualizarDatos;
