import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css"

export function AdmInicio () {
    return <div>
        <div>
            <div className="navegador">
                <ul className="navegadorLinks">
                    <li className="linkComponente">
                        <Link to="">Inicio</Link>
                    </li>
                    <li className="linkComponente">
                        <Link to="/GestionDeUsuario">Gestionar Usuario</Link>
                    </li>
                    <li className="linkComponente">
                        <Link to="/GestionDePedidos">Pedidos</Link>
                    </li>
                    <li className="linkComponente">
                        <Link to="/GestionDeProductos">Lista de productos</Link>
                    </li>
                </ul>     
            </div>
        </div>
    </div>
}