import { Menu } from "../../componentes/Menu"
import { Perfil } from "../../componentes/Perfil"
import { Compras } from "../../componentes/Compras"
import { FormUsuario } from "../../componentes/FormUsuario"
import "./PerfilPage.css"

const PerfilPage = () => {
    return (<>
        <Menu></Menu>
        <div className="S">
        <Perfil></Perfil>
        <FormUsuario/>
        </div>
        <Compras/>
    </>
    )
}

export default PerfilPage

