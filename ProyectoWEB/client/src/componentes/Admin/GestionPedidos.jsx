import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css"



export function GestionPedidos () {
    const [ ventas, setVentas ] = useState([])
    const [ search, setSearch ] = useState("")

    const API = "http://localhost:5005/ventasDia"
    const showData = async () =>{
        const response = await fetch(API)
        const data = await response.json()
        setVentas(data)
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
        results = ventas 
    }else{
        results = ventas.filter( (dato)=>
            dato.fecha.toLowerCase().includes(search.toLocaleLowerCase())
        )  
    }
    useEffect(()=>{
        showData()
    }, [])

    return (
        <div className="contTabla">
            <h3 className="TituloPedidos">Lista de pedidos</h3>
            <input calue={search} onChange={searcher} type="date" placeholder="Buscar pedido por fecha" className="busqueda"></input>
            <div>
                <table className="TablaPedidos">
                    <thead>
                        <tr>
                            <th scope="col">ID pedido</th>
                            <th scope="col">ID del comprador</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {results.map((eachVentas) => (
                            <tr>
                                <td>{eachVentas._id}</td> 
                                <td>{eachVentas.comprador_id}</td>
                                <td>{eachVentas.fecha}</td>
                                <td>{eachVentas.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}