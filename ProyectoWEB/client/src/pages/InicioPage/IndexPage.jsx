import { Menu } from "../../componentes/Menu"
import ImagenesEntre from "./banner.png"
import { Promos } from "../../componentes/Promos"
import { Footer } from "../../componentes/Footer"
import "./IndexPage.css"

const IndexPage = () =>{
    return (
        <div>
            <Menu/>
            <img id="ImagenEntre" src={ImagenesEntre}/>
            <Promos/>
            <Footer/>
        </div>
    )
}

export default IndexPage

