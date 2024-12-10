import React from "react";
import { useLocation, Link } from "react-router-dom";
import './detalhesProdutos.css';

import seta from '../../components/images/setaVoltar.png';

function DetalhesProduto() {
  const location = useLocation();
  const product = location.state;

  if (!product) {
    return <p>Produto não encontrado.</p>; // Garante que algo será exibido mesmo sem dados.
  }

  // Função para renderizar estrelas com base na avaliação
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Estrelas completas
    const halfStar = rating % 1 !== 0; // Verifica se há meia estrela
    const emptyStars = 5 - Math.ceil(rating); // Estrelas vazias

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full-star">★</span>);
    }
    if (halfStar) {
      stars.push(<span key="half" className="star half-star">☆</span>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty-star">☆</span>);
    }
    return stars;
  };

  return (
    <div className="product-details-container">
      {/* Botão Voltar */}
      <Link to="/" className="back-button">
        <img src={seta} alt="Voltar" className="back-arrow" />
      </Link>

      {/* Conteúdo do Produto */}
      <div className="product-details-card">
        <img src={product.image} alt={product.name} className="product-image" />
        
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <div className="product-rating">{renderStars(product.rating)}</div>
          <p className="product-description">{product.description}</p>
          <div className="product-price">R$ {product.price}</div>
          <button className="add-to-cart-btn">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default DetalhesProduto;
