import { useEffect, useState } from "react";
import axios from "axios";
import "./ItemCart.css"

export function ItemCart({ item }) {
    const [productsLength, setProductsLength] = useState(0);
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
        const { tipo, nombre, ingredientes, imagenURL, precio } = product;

        await axios.post("http://localhost:5005/productos-carro", { tipo, nombre, ingredientes, imagenURL, precio });

        getProducts();
        getProductsCart();
    };

    const editItemToCart = async (id, query, cantidad) => {
        if (query === "del" && cantidad === 1) {
            await axios
                .delete(`http://localhost:5005/productos-carro/${id}`)
                .then(({ data }) => console.log(data));
        } else {
            await axios
                .put(`http://localhost:5005/productos-carro/${id}?query=${query}`, {
                    cantidad,
                })
                .then(({ data }) => console.log(data));
        }

        getProducts();
        getProductsCart();
    };

    useEffect(() => {
        setProductsLength(
            cartItems?.reduce((previous, current) => previous + current.cantidad, 0)
        );
    }, [cartItems]);


    const { cantidad } = item;

    return (
        <div >
            <img className="imagenCarro" src={item.imagenURL} alt={item.nombre} />
            <div>
                <div >
                    <p className="nombreCarro" >{item.nombre}</p>
                    <div >
                        <button onClick={() => editItemToCart(item._id, "add", cantidad)}>
                            AGREGAR
                        </button>
                        <button onClick={() => editItemToCart(item._id, "del", cantidad)}>
                            SACAR
                        </button>
                    </div>
                </div>
                <div >
                    <div>{item.cantidad}</div>
                    <p>Total: ${item.cantidad * item.precio}</p>
                </div>
            </div>
        </div>
    );

}