import { useState } from "react"
import { Link } from "react-router-dom"
import "./CartaPage.css"
import { Menu } from "../../componentes/Menu"


const CartaPage = () => {
    const [ Productos, setProductos ] = useState([])
    const LoadProductos = () => {
        fetch("http://localhost:8000/productos")
            .then(res => res.json())
            .then(TodosProductos => setProductos(TodosProductos))
    }

    LoadProductos()
    return (
        <div>
            <Menu/>
            <h2 id="TextoCarta">Carta</h2>
            <Link to="/">Inicio</Link>
            {Productos.map(eachProducto => {
                return (
                    <article className="Productos-card">
                        <h2 className="NombreProducto">{eachProducto.nombre}</h2>
                        <img className="ImagenProducto" src={eachProducto.imagenURL}/>
                        <button>Comprar</button>
                    </article>
                )
            })}
        </div>
    )
}

export default CartaPage

