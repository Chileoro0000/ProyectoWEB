import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MenuCaja.css"
import { useEffect } from "react";

export function MenuCaja() {
    const [Ventas, setVentas] = useState([])
    const LoadVentas= () => {
        fetch("http://localhost:5005/ventasDia")
            .then(res => res.json())
            .then(TodosVentas => setVentas(TodosVentas))
    }

    LoadVentas()

    return <div class="tablapedidos">
        <div id="lista" class="screen">
            Información de los pedidos
        </div>
        <nav id='menuCaja'>
                <ul>
                    <li><a href=''>Pedidos</a></li>
                    <li><a href=''>Pedidos actuales</a></li>
                    <li><a href=''>Historial de cobros</a></li>
                </ul>
        </nav>
        <table className="tablapedido">
            <thead>
                <tr>
                    <th scope="col">Id Pedido</th>
                    <th scope="col">Id Comprador</th>
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
            {/* <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr>
            <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr>
            <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr>
            <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr>
            <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr>
            <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr>
            <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr>
            <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr>
            <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr>
            <tr>
                <td>11.685.879-1</td>
                <td>1</td>
                <td>08/11/2022</td>
                <td>$19990</td>
                <button>Confirmar</button>
                <button>Rechazar</button>
            </tr> */}
        </table>
    </div>
}