import { createContext, useEffect, useState } from "react";
import axios from "axios";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    await axios
      .get("http://localhost:5005/TodosLosProductos")
      .then(({ data }) => setProducts(data.products));
  };

  const getProductsCart = async () => {
    return await axios
      .get("http://localhost:5005/productos-carro")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const {tipo, nombre, ingredientes, imagenURL, precio } = product;

    await axios.post("http://localhost:5005/productos-carro", { tipo, nombre, ingredientes, imagenURL, precio });

    getProducts();
    getProductsCart();
  };

  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`http://localhost:5005/productos-carro/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`http://localhost:5005/productos-carro/${id}?query=${query}`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart, editItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;