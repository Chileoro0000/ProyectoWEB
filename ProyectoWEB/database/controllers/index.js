const register = require("./register");
const login = require("./login");
const getUserById = require("./getUserById");
const AddProductCart = require("./AddProductCart")
const DeleteProduct = require("./DeleteProduct")
const GetProduct = require("./GetProduct")
const GetProductCart = require("./GetProductCart")
const PutProduct = require("./PutProduct")

module.exports = {
  register,
  login,
  getUserById,
  AddProductCart,
  DeleteProduct,
  GetProduct,
  GetProductCart,
  PutProduct
};
