import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css"



export function GestionPedidos () {
    const [Ventas, setVentas] = useState([])
    const LoadVentas= () => {
        fetch("http://localhost:5005/ventasDia")
            .then(res => res.json())
            .then(TodosVentas => setVentas(TodosVentas))
    }

    LoadVentas()
    return (
        <div className="contTabla">
            <h3 className="TituloPedidos">Lista de pedidos</h3>
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
                    {Ventas.map((eachVentas) => (
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