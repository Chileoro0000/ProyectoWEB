import { Menu } from "../../componentes/Menu"
import { Perfil } from "../../componentes/Perfil"
import { Compras } from "../../componentes/Compras"
import { Footer } from "../../componentes/Footer"
import "./PerfilPage.css"

const PerfilPage = () => {
    return (<>
        <Menu></Menu>
        <Perfil></Perfil>
        <Compras/>
        <Footer/>
    </>
    )
}

export default PerfilPage

