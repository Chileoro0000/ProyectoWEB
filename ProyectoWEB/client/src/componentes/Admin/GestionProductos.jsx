import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css"


export function GestionProductos() {

    const [ products, setProducts ] = useState([])
    const [ search, setSearch ] = useState("")

    const API = "http://localhost:5005/productos"
    const showData = async () =>{
        const response = await fetch(API)
        const data = await response.json()
        console.log(data)
        setProducts(data)
    }
    // Busqueda
    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    //Filtrado
    let results = []
    if(!search)
    {
        results = products 
    }else{
        results = products.filter( (dato)=>
            dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
        )  
    }
    useEffect(()=>{
        showData()
    }, [])
    

    return (
        <div className="contTabla">
            <h3 className="TituloProductos">Menu de productos disponibles</h3> 
            <input calue={search} onChange={searcher} type="text" placeholder="Buscar producto" className="busqueda"></input>
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
                        {results.map((products) => (
                            <tr>
                                <td>{products._id}</td>
                                <td>{products.nombre}</td>
                                <td>{products.tipo}</td>
                                <td>{products.ingredientes}</td>
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