const User = require("../model/usuario");

const getUsers = async (req, res) => {
    const usuarios = await User.find();
  
    if (usuarios) {
      res.json({ usuarios });
    } else {
      res.json({ mensaje: "No hay Usuarios" });
    }
  };
  
  module.exports = getUsers;