import { Menu } from "../../componentes/Menu"
import { Perfil } from "../../componentes/Perfil"
import { Compras } from "../../componentes/Compras"
import { FormUsuario } from "../../componentes/FormUsuario"
import "./PerfilPage.css"

const PerfilPage = () => {
    return (<>
        <Menu></Menu>
        <Perfil></Perfil>
        <FormUsuario/>
        <Compras/>
    </>
    )
}

export default PerfilPage

