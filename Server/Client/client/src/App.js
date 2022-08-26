import './App.css';
import IndexPage from './pages/InicioPage/IndexPage';
import CartaPage from './pages/Carta/CartaPage';
import SobreNosotrosPage from './pages/SobreNosotros/SobrePage';

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/Carta' element={<CartaPage />} />
        <Route path='/SobreNosotros' element={<SobreNosotrosPage />} />
      </Routes>
    </div>
  );
}

export default App;
