import "./Admin.css"
import { GestionUsuario } from "../../componentes/Admin/GestionUsuario"
import { AdmInicio } from "../../componentes/Admin/AdmInicio"
import { Menu } from "../../componentes/Menu/Menu"
import { Footer } from "../../componentes/Footer/Footer"
import { Navbar } from "../../componentes/Admin/Navbar"

const GestionarUsuario = () => {
    return (
      <div>
        <Menu></Menu>
        <Navbar/>
        <div className="flex">
            <AdmInicio/>
            <GestionUsuario/>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default GestionarUsuario