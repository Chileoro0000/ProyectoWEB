const Cart = require("../model/Carro");
const Product = require("../model/productos");

const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  /* Buscamos el producto en el carrito */
  const productInCart = await Cart.findById(productId);

  /* Buscamos el producto en nuestra DB por el nombre del que esta en el carrito */
  const { tipo, nombre, ingredientes, imagenURL, precio, _id } = await Product.findOne({
    tipo:productInCart.tipo ,nombre: productInCart.nombre, 
  });

  /* Buscamos y eliminamos el producto con la id */
  await Cart.findByIdAndDelete(productId);
  
  /* Buscamos y editamos la prop inCart: false */
  /* Le pasamos la id del producto en la DB */
  /* La prop a cambiar y las demas */
  /* Y el new para devolver el producto editado */
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