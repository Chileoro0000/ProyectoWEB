import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css"


export function GestionProductos() {
    const [Productos, setProductos] = useState([])
    const LoadProductos = () => {
        fetch("http://localhost:5005/productos")
            .then(res => res.json())
            .then(TodosProductos => setProductos(TodosProductos))
    }

    LoadProductos()
    return (
        <div className="contTabla">
            <h3 className="TituloProductos">Menu de productos disponibles</h3>
            <div>
                <table className="TablaProductos">
                    <thead>
                        <tr>
                            <th scope="col">ID producto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Descripcion</th>
                            <th>Opciones de stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Productos.map((eachProductos) => (
                            <tr>
                                <td>{eachProductos._id}</td>
                                <td>{eachProductos.nombre}</td>
                                <td>{eachProductos.tipo}</td>
                                <td>{eachProductos.ingredientes}</td>
                                <div className="botonOpcionesUsuario">
                                    <button>""</button>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}