const Cart = require("../model/Carro");
const Product = require("../model/productos");

const addProductCart = async (req, res) => {
  const { tipo, nombre, ingredientes, imagenURL, precio } = req.body;
  const estaEnProducts = await Product.findOne({ tipo, nombre });
  const noEstaVacio = tipo != "" && nombre !== "" && ingredientes !== "" && imagenURL !== "" && precio !== "";
  const estaEnElCarrito = await Cart.findOne({ tipo, nombre });


  if (!estaEnProducts) {
    res.status(400).json({
      mensaje: "Este producto no se encuentra en nuestra base de datos",
    });
  } else if (noEstaVacio && !estaEnElCarrito) {
    const newProductEnCarro = new Cart({ tipo, nombre, ingredientes, imagenURL,  cantidad: 1, precio});

    await Product.findByIdAndUpdate(
      estaEnProducts?._id,
      { EnCarro: true, tipo, nombre, ingredientes, imagenURL, precio },
      { new: true }
    )
      .then((product) => {
        newProductEnCarro.save();
        res.json({
          mensaje: `El producto fue agregado al carrito`,
          product,
        });
      })
      .catch((error) => console.error(error));

  } else if (estaEnElCarrito) {
    res.status(400).json({
      mensaje: "El producto ya esta en el carrito",
    });
  }
};

module.exports = addProductCart;
