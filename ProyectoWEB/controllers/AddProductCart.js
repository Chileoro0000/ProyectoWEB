const Cart = require("../model/Carro");
const Product = require("../model/productos");

const addProductCart = async (req, res) => {
  const { tipo, nombre, ingredientes, imagenURL, precio } = req.body;

  /* Nos fijamos si tenemos el producto */
  const estaEnProducts = await Product.findOne({ tipo, nombre });

  /* Nos fijamos si todos los campos vienen con info */
  const noEstaVacio = tipo != "" && nombre !== "" && ingredientes !== "" && imagenURL !== "" && precio !== "";

  /* Nos fijamos si el producto ya esta en el carrito */
  const estaEnElCarrito = await Cart.findOne({ tipo, nombre });

  /* Si no tenemos el producto */
  if (!estaEnProducts) {
    res.status(400).json({
      mensaje: "Este producto no se encuentra en nuestra base de datos",
    });

    /* Si nos envian algo y no esta en el carrito lo agregamos */
  } else if (noEstaVacio && !estaEnElCarrito) {
    const newProductEnCarro = new Cart({ tipo, nombre, ingredientes, imagenURL,  cantidad: 1, precio});

    /* Y actualizamos la prop EnCarro: true en nuestros productos */
    await Product.findByIdAndUpdate(
      estaEnProducts?._id,
      { EnCarro: true, tipo, nombre, ingredientes, precio, imagenURL },
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

    /* Y si esta en el carrito avisamos */
  } else if (estaEnElCarrito) {
    res.status(400).json({
      mensaje: "El producto ya esta en el carrito",
    });
  }
};

module.exports = addProductCart;