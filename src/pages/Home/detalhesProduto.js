import React from "react";
import { useLocation, Link } from "react-router-dom";
import './detalhesProdutos.css';

import seta from '../../components/images/setaVoltar.png'

function DetalhesProduto() {
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <p>Produto não encontrado.</p>; // Garante que algo será exibido mesmo sem dados.
  }

  return (
    <div className="product-details container mt-4">
      
      <Link to="/" className="back-button">
        <img src={seta} alt="" className="back-arrow"/>
      </Link>

      <div className="product-content d-flex align-items-start">
        {/* Imagem do Produto */}
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        {/* Texto ao lado */}
        <div className="product-text ms-4">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>
            <strong>Preço:</strong> R$ {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetalhesProduto;
