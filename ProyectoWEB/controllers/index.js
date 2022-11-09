const register = require("./register");
const login = require("./login");
const getUserById = require("./getUserById");
const AddProductCart = require("./AddProductCart")
const DeleteProduct = require("./DeleteProduct")
const GetProduct = require("./GetProduct")
const GetProductCart = require("./GetProductCart")
const PutProduct = require("./PutProduct")
const AddVentas = require("./AddVentas")
const getUser = require("./getUsers")
const getVentas = require("./getVentas")

module.exports = {
  register,
  login,
  getUserById,
  AddProductCart,
  DeleteProduct,
  GetProduct,
  GetProductCart,
  PutProduct,
  AddVentas,
  getUser,
  getVentas
};
