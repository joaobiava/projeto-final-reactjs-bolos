import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../src/pages/Carrinho/cartContext.js";

import Header from './components/Header/header.js';
import Home from './pages/Home/home';
import Sobre from './pages/Sobre/sobre';
import Carrinho from './pages/Carrinho/carrinho.js';
import Erro from '../src/pages/Erro/erro';
import DetalhesProduto from '../src/pages/Home/detalhesProduto.js';
import Personaliza from '../src/pages/Personaliza/personaliza.js';
import Login from '../src/pages/Login/login.js';
import Cadastro from '../src/pages/Cadastro/cadastro.js';
import Perfil from '../src/pages/Perfil/perfil.js';
import TelaInicial from "./pages/TelaInicial/telaInicial.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

      <CartProvider>
        <Routes>
          <Route path="/" element={<><Header/> <Home /></>} />
          <Route path="/sobre" element={<><Header/> <Sobre /></>} />
          <Route path="/carrinho" element={<><Header/> <Carrinho /></>} />
          <Route path="/personaliza" element={<><Header/> <Personaliza /></>} />
          <Route path="/detalhes/:id" element={<><Header/> <DetalhesProduto /></>} />
          <Route path='*' element={<><Header/> <Erro /></>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/telaInicial" element={<TelaInicial/>}/>
        </Routes>
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;