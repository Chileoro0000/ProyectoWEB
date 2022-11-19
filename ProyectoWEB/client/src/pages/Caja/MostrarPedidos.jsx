import "./Caja.css"
import { Pedidos } from "../../componentes/Menu/Pedidos"
import { MenuCaja } from "../../componentes/Menu/MenuCaja"
import { Menu } from "../../componentes/Menu/Menu"
import { Navbar } from "../../componentes/Menu/NavbarCaja"

const MostrarPedidos = () => {
    return (
      <div>
        <Menu></Menu>
        <Navbar/>
        <div className="flex">
            <MenuCaja/>
            <Pedidos/>
        </div>
      </div>
    )
  }
  
  export default MostrarPedidos