import { Menu } from "../../componentes/Menu"
import ImagenesEntre from "./banner.png"
import "./IndexPage.css"

const IndexPage = () =>{
    return (
        <div>
            <Menu/>
            <div className="img-container"><img id="ImagenEntre"src={ImagenesEntre}/></div>
            <h2 id="TextoOfertas">Ofertas</h2>
        </div>
    )
}

export default IndexPage

