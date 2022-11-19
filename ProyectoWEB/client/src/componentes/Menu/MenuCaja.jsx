import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MenuCaja.css"
import { useEffect } from "react";

export function MenuCaja() {

        return <div>
            <div>
                <div classname="navegador">
                    <ul className="navegadorLinks">
                        <li className="linkComponente">
                            <Link to="/MuestraDePedidos">Pedidos</Link>
                        </li>
                        <li className="linkComponente">
                            <Link to="/MuestraDePedidosActuales">Pedidos Actuales</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }
