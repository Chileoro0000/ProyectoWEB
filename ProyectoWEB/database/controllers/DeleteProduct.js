const Cart = require("../model/Carro");
const Product = require("../model/productos");

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const productInCart = await Cart.findById(productId);
  const { tipo, nombre, ingredientes, imagenURL, precio, _id } = await Product.findOne({
    tipo:productInCart.tipo, nombre: productInCart.nombre, 
  });

  await Cart.findByIdAndDelete(productId);
  
  await Product.findByIdAndUpdate(
    _id,
    { EnCarro: false, tipo, nombre, ingredientes, imagenURL, precio },
    { new: true }
  )
    .then((product) => {
      res.json({
        mensaje: `El producto ${product.nombre} fue eliminado del carrito`,
      });
    })
    .catch((error) => res.json({ mensaje: "Hubo un error" }));
};

module.exports = deleteProduct;