import { Menu } from "../../componentes/Menu/Menu"
import { Perfil } from "../../componentes/Perfil/Perfil"
import { Compras } from "../../componentes/Carro/Compras"
import { Footer } from "../../componentes/Footer/Footer"
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

