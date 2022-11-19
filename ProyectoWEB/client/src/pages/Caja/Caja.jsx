import "./Caja.css"
import { Menu } from "../../componentes/Menu/Menu"
import { MenuCaja } from "../../componentes/Menu/MenuCaja"
import { Navbar } from "../../componentes/Menu/NavbarCaja"


const Caja = () => {
  return (
    <div>
      <Menu></Menu>
      <Navbar/>
      <div className="flex">
        <MenuCaja/>
      </div>
    </div>
  )
}

export default Caja