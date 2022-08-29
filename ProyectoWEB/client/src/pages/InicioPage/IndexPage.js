import { Menu } from "../../componentes/Menu"
import ImagenesEntre from "./2.jpg"
import "./IndexPage.css"

const IndexPage = () =>{
    return (
        <div>
            <Menu/>
            <img id="ImagenEntre"src={ImagenesEntre}/>
            <h2 id="TextoOfertas">Ofertas</h2>
            
        </div>
    )
}

export default IndexPage

