import "./Admin.css"
import { GestionProductos } from "../../componentes/Admin/GestionProductos"
import { AdmInicio } from "../../componentes/Admin/AdmInicio"
import { Menu } from "../../componentes/Menu/Menu"
import { Footer } from "../../componentes/Footer/Footer"
import { Navbar } from "../../componentes/Admin/Navbar"

const GestionarProductos = () => {
    return (
      <div>
        <Menu></Menu>
        <Navbar/>
        <div className="flex">
            <AdmInicio/>
            <GestionProductos/>
        </div>
        
        <Footer/>
      </div>
    )
  }
  
  export default GestionarProductos