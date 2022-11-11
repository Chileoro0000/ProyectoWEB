import axios from "axios"
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import "./Carta.css"

export function Carta() {
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

    const [Productos, setProductos] = useState([])
    const LoadProductos = () => {
        fetch("http://localhost:5005/productos")
            .then(res => res.json())
            .then(TodosProductos => setProductos(TodosProductos))
    }

    LoadProductos()
    return (
        <div>
            <h2 id="textoCarta">CARTA</h2>
            {<div className="contenedorCartas">
                {Productos.map(eachProducto => {
                    return (
                        <div id="carta">
                            <div className="imgProducto"> <img id="IMGproducto" src={eachProducto.imagenURL} /></div>
                            <div className="descContain">
                                <p id="nombreProducto"> {(eachProducto.nombre)}</p>
                                <p id="tipoProducto"> {eachProducto.tipo}</p>
                            </div>
                            <div className="precioProducto">
                                <span id="precio">${eachProducto.precio}</span>
                            </div>
                            <div className="cardButton">
                                {!eachProducto.EnCarro ? (
                                    <button className="button" onClick={() => addItemToCart(eachProducto)}>Agregar al carro</button>
                                ) : (
                                    <button className="button" >En el carro</button>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}