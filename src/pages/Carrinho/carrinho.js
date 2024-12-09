import React from "react";
import { useCart } from "./cartContext";
import "./carrinho.css"; // Importar o CSS
import imagem from "../../components/images/MauroELurde.png"

const Carrinho = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="carrinho-container">
      {/* Cabeçalho com botão "Finalizar Pedido" */}
      <div className="carrinho-header">
        <h1 className="carrinho-titulo"></h1>
        <button className="finalizar-btn">Finalizar Pedido</button>
      </div>

      {/* Conteúdo do Carrinho */}
      {cart.length === 0 ? (
        <p className="carrinho-vazio">Seu carrinho está vazio</p>
      ) : (
        <div>
          <ul className="carrinho-lista">
            {cart.map((item, index) => (
              <li
                key={index}
                className="carrinho-item d-flex justify-content-between align-items-center"
              >
                {/* Imagem do Bolo */}
                <img
                  src={imagem} // Imagem dinâmica
                  alt={item.massa}
                  className="item-imagem"
                />

                {/* Descrição */}
                <div className="item-detalhes">
                  <strong>{item.massa}</strong>
                  <p>
                    {item.recheio} - {item.cobertura}
                  </p>
                  <span className="item-preco">R$ {item.preco}</span>
                </div>

                {/* Botão de Remover */}
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div className="carrinho-total">
            <h3>
              Total: R${" "}
              {cart.reduce((total, item) => total + item.preco, 0).toFixed(2)}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrinho;
