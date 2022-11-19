import "./Caja.css"
import { PedidosActuales } from "../../componentes/Menu/PedidosActuales"
import { MenuCaja } from "../../componentes/Menu/MenuCaja"
import { Menu } from "../../componentes/Menu/Menu"
import { Navbar } from "../../componentes/Menu/NavbarCaja"

const MostrarPedidosActuales = () => {
    return (
      <div>
        <Menu></Menu>
        <Navbar/>
        <div className="flex">
            <MenuCaja/>
            <PedidosActuales/>
        </div>
      </div>
    )
  }
  
  export default MostrarPedidosActuales