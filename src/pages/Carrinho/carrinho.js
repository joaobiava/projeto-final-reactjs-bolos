import React from "react";
import { useCart } from "./cartContext";

const Carrinho = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container">
      <h1 className="my-4">Carrinho de Compras</h1>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.massa}</strong> - {item.recheio} - {item.cobertura} - {item.preco}
                </div>
                <div className="d-flex">
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)} // Remover item pelo id
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="my-4">
            <h3>Total: R${cart.reduce((total, item) => total + item.preco, 0)}</h3> {/* Exibe o total */}
            {/* Adicione formas de pagamento e outros detalhes */}
          </div>
        </div>
      )}
    </div>
  );
};
export default Carrinho;