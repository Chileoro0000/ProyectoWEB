import React, { useContext } from "react";
import CartContext from "../context/CartContext";


export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <div>
      <img src={item.imagenURL} alt={item.nombre} />
      <div >
        <div >
          <p>{item.nombre}</p>
          <div >
            <button onClick={() => editItemToCart(item._id, "add", amount)}>
              AGREGAR
            </button>
            <button onClick={() => editItemToCart(item._id, "del", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div >
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.precio}</p>
        </div>
      </div>
    </div>
  );
};