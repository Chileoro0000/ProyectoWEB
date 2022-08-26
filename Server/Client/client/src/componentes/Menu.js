import "./menu.css"
import {Link} from "react-router-dom"

export function Menu(){
    return <header>
        <nav className="Menu">
            <ul className="Menu">
                <li className="Lista"><a href="#">Carro</a></li>
                <li className="Lista"><Link to="/">Inicio</Link></li>
                <li className="Lista"><Link to="/Carta">Carta</Link></li>
                <li className="Lista"><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
                <li id="Logo">Fukusuke</li>
            </ul>
        </nav>
    </header>
  }