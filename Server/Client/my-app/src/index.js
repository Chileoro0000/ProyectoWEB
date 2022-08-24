import React from 'react';
import ReactDOM from 'react-dom/client';
import {Menu} from './pages/menu/Menu'
import { EntreCarta } from './pages/entrecarta/EntreCarta';
import { Ofertas } from './pages/ofertas/Ofertas';
import { PieDePagina } from './pages/pie/Pie';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<div>
    <Menu/>
    <EntreCarta/>
    <Ofertas/>
    <PieDePagina/>
</div>
)