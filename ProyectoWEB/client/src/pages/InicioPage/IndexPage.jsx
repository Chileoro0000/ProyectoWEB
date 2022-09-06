import { Menu } from "../../componentes/Menu"
import ImagenesEntre from "./Banner2.png"
import { Promos } from "../../componentes/Promos"
import "./IndexPage.css"
import { Footer } from "../../componentes/Footer"

const IndexPage = () => {
    return (
        <div>
            <Menu />
            <img id="ImagenEntre" src={ImagenesEntre} />
            <Promos />
            <div className="ContainerPq"><h2 id="TextPq">¿Por que preferirnos?</h2>
                <p>Somos los mejores sushi de Maipu desde 1998, tenemos historia</p>
            </div>
            <Footer />  
            
        </div>
    )
}

export default IndexPage

