import "./Admin.css"
import { GestionPedidos } from "../../componentes/Admin/GestionPedidos"
import { AdmInicio } from "../../componentes/Admin/AdmInicio"
import { Menu } from "../../componentes/Menu/Menu"
import { Footer } from "../../componentes/Footer/Footer"
import { Navbar } from "../../componentes/Admin/Navbar"

const GestionarPedidos = () => {
    return (
      <div>
        <Menu></Menu>
        <Navbar/>
        <div className="flex">
            <AdmInicio/>
            <GestionPedidos/>
        </div>
        
        <Footer/>
      </div>
    )
  }
  
  export default GestionarPedidos