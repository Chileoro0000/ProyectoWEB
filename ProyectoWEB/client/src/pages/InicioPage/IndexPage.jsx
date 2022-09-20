import { Menu } from "../../componentes/Menu/Menu"
import ImagenesEntre from "./Banner2.png"
import { Promos } from "../../componentes/Promos/Promos"
import "./IndexPage.css"
import { Footer } from "../../componentes/Footer/Footer"

const IndexPage = () => {
    return (
        <div>
            <Menu />
            <img id="ImagenEntre" src={ImagenesEntre} />
            <Promos />
            <Footer />  
            
        </div>
    )
}

export default IndexPage

