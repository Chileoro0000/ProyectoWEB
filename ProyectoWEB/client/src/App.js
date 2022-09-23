import './App.css';
import IndexPage from './pages/InicioPage/IndexPage';
import CartaPage from './pages/Carta/CartaPage';
import SobreNosotrosPage from './pages/SobreNosotros/SobrePage';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import PerfilPage from './pages/Perfil/PerfilPage';

import { Routes, Route } from "react-router-dom"
import Carro from './pages/Carro/Carro';

function App() {
  return (
    <div className='container1'>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/Carta' element={<CartaPage />} />
        <Route path='/SobreNosotros' element={<SobreNosotrosPage />} />
        <Route path='/Register' element={<RegisterPage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Perfil' element={<PerfilPage />} />
        <Route path='/Carro' element={<Carro />} />

      </Routes>
    </div>

  );
}

export default App;
