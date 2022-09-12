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
                .then(({ data }) => setName(data.nombre))
                .catch((error) => console.error(error));
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token")
    }

    if (token) {
        return <header>
           
            <nav id='menu'>
                <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
                <ul>
                    <li><Link to="/">🚚</Link></li>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Carta">Carta</Link></li>
                    <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
                    <li><Link to="/Perfil">Perfil</Link></li>
                    <li><Link to="/Login"><button id="BotonCerrar" onClick={handleLogout} >
                        <span class="shadow"></span>
                        <span class="edge"></span>
                        <span class="front text" > Cerrar sesion</span>
                    </button></Link></li>
                </ul>
                <h3 id="LOGO">FukuSuke</h3>
            </nav>
        </header>
    } else {
        return <header>
            <h2 id="LOGO">FukuSuke</h2>
            <nav id='menu'>
                <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
                <ul>
                    <li><Link to="/">🚚</Link></li>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Carta">Carta</Link></li>
                    <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
                </ul>
                <ul className="second">
                    <li><Link to="/Login" className="login">Iniciar sesion</Link></li>
                    <li><Link to="/Register" >Registrarse</Link></li>
                </ul>
            </nav>
        </header>
    }

}


{/* <nav className="Menu">
                <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
                <Link to="/">Inicio</Link>
                <Link to="/Carta">Carta</Link>
                <Link to="/SobreNosotros">Sobre Nosotros</Link>   
            </nav>
            <a className="logo">
                <input type='checkbox' id='responsive-menu' onclick='updatemenu()' /><label></label>
                <nav className="inicioRegister">
                    <Link to="/Login" className="login">Iniciar sesion</Link>
                    <Link to="/Register" >Registrarse</Link>
                </nav>
                <img src="logo.png" alt="Logo"/>
                <h2 className="nombreComp">Fukusuke</h2>
            </a> */}