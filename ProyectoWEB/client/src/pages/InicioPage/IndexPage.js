import { Menu } from "../../componentes/Menu"
import ImagenesEntre from "./banner.png"
import { Promos } from "../../componentes/Promos"
import "./IndexPage.css"

const IndexPage = () =>{
    return (
        <div>
            <Menu/>
            <img id="ImagenEntre"src={ImagenesEntre}/>
            <h2 id="TextoOfertas">Ofertas</h2>
            <Promos/>
        </div>
    )
}

export default IndexPage

