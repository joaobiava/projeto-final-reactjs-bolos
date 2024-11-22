import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/header.js';
import Home from './pages/Home/home';
import Sobre from './pages/Sobre/sobre';
import Compra from './pages/Compra/compra';
import Erro from '../src/pages/Erro/erro';

function RoutesApp(){
    return(
        
        <BrowserRouter>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/compra' element={<Compra/>} />
                <Route path='*' element={<Erro/>} />
            </Routes>

        </BrowserRouter>

    );
}

export default RoutesApp;