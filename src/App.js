import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../src/pages/Carrinho/cartContext.js";

import Header from './components/Header/header.js';
import Home from './pages/Home/home';
import Sobre from './pages/Sobre/sobre';
import Carrinho from './pages/Carrinho/carrinho.js';
import Erro from '../src/pages/Erro/erro';
import DetalhesProduto from '../src/pages/Home/detalhesProduto.js'
import Personaliza from '../src/pages/Personaliza/personaliza.js'
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>
      
      <Header/>

      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/personaliza" element={<Personaliza />} />
          <Route path="/detalhes/:id" element={<DetalhesProduto />} />
          <Route path='*' element={<Erro />} />
        </Routes>
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;