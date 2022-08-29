import './App.css';
import IndexPage from './pages/InicioPage/IndexPage';
import CartaPage from './pages/Carta/CartaPage';
import SobreNosotrosPage from './pages/SobreNosotros/SobrePage';
import LoginPage from './pages/Login/LoginPage';

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/Carta' element={<CartaPage />} />
        <Route path='/SobreNosotros' element={<SobreNosotrosPage />} />
        <Route path='/Login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
