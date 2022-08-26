const bcrypt = require("bcrypt");
const Usuario = require("../models/usuario");

const register = async (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    Usuario.findOne({ correo }).then((usuario) => {
        if (usuario) {
            return res.json({ mensaje: "Ya existe usuario con correo ingresado" });
        } else if (!nombre || !correo || !contraseña) {
            return res.json({ mensaje: "Falta nombre/correo/contraseña" });
        } else {
            bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
                if (error) res.json({ error });
                else {
                    const nuevoUsuario = new Usuario({
                        nombre,
                        correo,
                        contraseña: contraseñaHasheada,
                    });

                    nuevoUsuario
                        .save()
                        .then((usuario) => {
                            res.json({ mensaje: "Usuario creado correctamente", usuario });
                        })
                        .catch(error => console.log(error));
                }
            })
        }
    });
}

module.exports = register;