import "./menu.css"
import { Link } from "react-router-dom"

export function Menu() {
    return <header>
        <h3 id="LOGO">FukuSuke</h3>
        <nav id='menu'>
            <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
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