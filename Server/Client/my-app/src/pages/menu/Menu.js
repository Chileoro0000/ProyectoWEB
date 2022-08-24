import "./menu.css"

export function Menu(){
    return <header>
        <nav className="Menu">
            <ul className="Menu">
                <li className="Lista"><a href="#">Carro</a></li>
                <li className="Lista"><a href="#">Inicio</a></li>
                <li className="Lista"><a href="#">Carta</a></li>
                <li className="Lista"><a href="#">Sobre nosotros</a></li>
                <li id="Logo">Fukusuke</li>
            </ul>
        </nav>
    </header>
  }