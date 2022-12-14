import './App.css';
import IndexPage from './pages/InicioPage/IndexPage';
import CartaPage from './pages/Carta/CartaPage';
import SobreNosotrosPage from './pages/SobreNosotros/SobrePage';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import PerfilPage from './pages/Perfil/PerfilPage';
import BoletaPage from './pages/Boleta/Boleta';
import AnuladoPage from './pages/Anulado/Anulado';
import Caja from './pages/Caja/Caja';
import MostrarPedidos from './pages/Caja/MostrarPedidos';
import MostrarPedidosActuales from './pages/Caja/MostrarPedidosActuales';
import Admin from './pages/Admin/Admin';
import GestionarPedidos from './pages/Admin/GestionarPedidos';
import GestionarProductos from './pages/Admin/GestionarProductos';
import GestionarUsuario from './pages/Admin/GestionarUsuario'

import { Routes, Route } from "react-router-dom"
import Carro from './pages/Carro/Carro';
import { Link, useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Pedidos } from './componentes/Menu/Pedidos';
import { PedidosActuales } from './componentes/Menu/PedidosActuales';


function App() {
  const [Cajero, setCajero] = useState();

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios
                .get("http://localhost:5005/user", {
                    headers: {
                        token: token,
                    },
                })
                .then(({ data }) => (setCajero(data.Cajero)))
                .catch((error) => console.error(error));
        }
    }, [token]);

  return (
    <div className='container1'>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/Carta' element={<CartaPage />} />
        <Route path='/SobreNosotros' element={<SobreNosotrosPage />} />
        <Route path='/Register' element={<RegisterPage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/GestionDeUsuario' element={<GestionarUsuario />} />
        <Route path='/GestionDePedidos' element={<GestionarPedidos />} />
        <Route path='/GestionDeProductos' element={<GestionarProductos />} />
        <Route path='/Perfil' element={<PerfilPage />} />
        <Route path='/Boleta' element={<BoletaPage />} />
        <Route path='/Anulado' element={<AnuladoPage />}/>
        <Route path='/Carro' element={<Carro />} />
        <Route path='/Caja' element={<Caja/>} />
        <Route path='/MuestraDePedidos' element={<MostrarPedidos/>} />
        <Route path='/MuestraDePedidosActuales' element={<MostrarPedidosActuales/>} />
      </Routes>
    </div>
  );
}

export default App;
