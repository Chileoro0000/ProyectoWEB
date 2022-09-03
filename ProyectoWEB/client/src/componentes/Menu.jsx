import "./menu.css"
import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function Menu() {
    const [name, setName] = useState();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios
                .get("http://localhost:5005/user", {
                    headers: {
                        token: token,
                    },
                })
                .then(({data}) => setName(data.nombre))
                .catch((error) => console.error(error));
        }
    }, [token]);

    if (token){
        return <header>
        <h3 id="LOGO">FukuSuke</h3>
        <nav id='menu'>
            <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Carta">Carta</Link></li>
                <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
                <li><Link to="/Perfil">Cerrar Sesion</Link></li>
                <li><Link to="/Perfil">Mi perfil</Link></li>
            </ul>
        </nav>
    </header>
    } else {
        return <header>
        <h3 id="LOGO">FukuSuke</h3>
        <nav id='menu'>
            <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Carta">Carta</Link></li>
                <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
                <li><Link to="/Login">Iniciar sesion</Link></li>
                <li><Link to="/Register">Registrarse</Link></li>
            </ul>
        </nav>
    </header>

    }
    
}