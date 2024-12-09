import { useState } from "react";
import { useCart } from "../Carrinho/cartContext"; // Importa o hook
import "./personaliza.css";
import imagem from "../../components/images/fein.png"

function Personaliza() {
  const [massa, setMassa] = useState("");
  const [recheio, setRecheio] = useState("");
  const [cobertura, setCobertura] = useState("");
  const [etiqueta, setEtiqueta] = useState("");
  const [showModal, setShowModal] = useState(false); // Estado para controlar o popup/modal
  const [pedidoResumo, setPedidoResumo] = useState(null); // Armazena os detalhes do pedido
  const { addToCart } = useCart();

  const massas = ["Chocolate", "Baunilha", "Red Velvet", "Laranja"];
  const recheios = ["Brigadeiro", "Doce de Leite", "Creme de Limão", "Coco"];
  const coberturas = ["Ganache", "Chantilly", "Marshmallow", "Calda de Frutas"];
  const etiquetas = ["Parabéns", "Feliz Aniversário", "Com Amor", "Obrigada!"];

  const finalizarPedido = () => {
    const pedido = {
      id: Date.now(), // Usando o timestamp como id único
      massa,
      recheio,
      cobertura,
      etiqueta,
      preco: 50, // Defina o preço do pedido aqui
    };
    addToCart(pedido); // Adiciona o pedido ao carrinho
    setPedidoResumo(pedido); // Salva o pedido para mostrar no popup
    setShowModal(true);
  };

  return (
    <div className="personaliza-container">
      {/* Retângulo Laranja de Fundo */}
      <div className="retangulo-laranja"></div>
      {/* Escolhas do Cliente */}
      <div className="opcoes-personaliza">
        <div className="opcao">
          <h5>Cobertura</h5>
          <select
            className="form-select"
            value={cobertura}
            onChange={(e) => setCobertura(e.target.value)}
          >
            <option value="">Escolha sua cobertura...</option>
            {coberturas.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="opcao">
          <h5>Recheio</h5>
          <select
            className="form-select"
            value={recheio}
            onChange={(e) => setRecheio(e.target.value)}
          >
            <option value="">Escolha o sabor do recheio...</option>
            {recheios.map((r, index) => (
              <option key={index} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="opcao">
          <h5>Massa</h5>
          <select
            className="form-select"
            value={massa}
            onChange={(e) => setMassa(e.target.value)}
          >
            <option value="">Escolha o sabor da massa...</option>
            {massas.map((m, index) => (
              <option key={index} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className="opcao">
          <h5>Etiquetas Personalizadas <span className="opcional">(Opcional)</span></h5>
          <select
            className="form-select"
            value={etiqueta}
            onChange={(e) => setEtiqueta(e.target.value)}
          >
            <option value="">Escolha sua etiqueta...</option>
            {etiquetas.map((e, index) => (
              <option key={index} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pré-visualização */}
      <div className="pre-visualizacao">
        <h5>Pré-Visualização</h5>
        <img
          src={imagem} // Imagem genérica
          alt="Pré-visualização"
          className="imagem-pre-visualizacao"
        />
        <div className="resumo">
          <p>Subtotal</p>
          <h4>R$ 50,00</h4>
        </div>
      </div>

      {/* Botão de Finalizar */}
      <button
        className="botao-finalizar"
        onClick={finalizarPedido}
        disabled={!massa || !recheio || !cobertura}
      >
        Adicionar ao carrinho
      </button>

      {/* Modal de Resumo do Pedido */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Pedido Adicionado!</h2>
            <p>
              <strong>Massa:</strong> {pedidoResumo.massa}
            </p>
            <p>
              <strong>Recheio:</strong> {pedidoResumo.recheio}
            </p>
            <p>
              <strong>Cobertura:</strong> {pedidoResumo.cobertura}
            </p>
            {pedidoResumo.etiqueta && (
              <p>
                <strong>Etiqueta:</strong> {pedidoResumo.etiqueta}
              </p>
            )}
            <p>
              <strong>Total:</strong> R$ {pedidoResumo.preco.toFixed(2)}
            </p>
            <button className="botao-fechar" onClick={() => setShowModal(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Personaliza;