import "./Admin.css"
import { AdmInicio } from "../../componentes/Admin/AdmInicio"
import { Menu } from "../../componentes/Menu/Menu"
import { Footer } from "../../componentes/Footer/Footer"
import { Navbar } from "../../componentes/Admin/Navbar"

const Admin = () => {
    return (
      <div>
        <Menu></Menu>
        <Navbar/>
        <div className="flex">
            <AdmInicio/>
        </div>
        <Footer/>
      </div>
    )
  }
  
  export default Admin