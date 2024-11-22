import { useState } from "react";
import './compra.css';

function Compra() {
  const [massa, setMassa] = useState("");
  const [recheio, setRecheio] = useState("");
  const [cobertura, setCobertura] = useState("");
  const [pedido, setPedido] = useState(null);

  const massas = ["Chocolate", "Baunilha", "Red Velvet", "Laranja"];
  const recheios = ["Brigadeiro", "Doce de Leite", "Creme de Limão", "Coco"];
  const coberturas = ["Ganache", "Chantilly", "Marshmallow", "Calda de Frutas"];

  const finalizarPedido = () => {
    setPedido({ massa, recheio, cobertura });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Monte seu Bolo de Pote</h1>

      {/* Escolha de Massa */}
      <div className="mb-4">
        <h5>Escolha a Massa:</h5>
        <select 
          className="form-select" 
          value={massa} 
          onChange={(e) => setMassa(e.target.value)}
        >
          <option value="">Selecione a massa</option>
          {massas.map((m, index) => (
            <option key={index} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {/* Escolha de Recheio */}
      <div className="mb-4">
        <h5>Escolha o Recheio:</h5>
        <select 
          className="form-select" 
          value={recheio} 
          onChange={(e) => setRecheio(e.target.value)}
        >
          <option value="">Selecione o recheio</option>
          {recheios.map((r, index) => (
            <option key={index} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Escolha de Cobertura */}
      <div className="mb-4">
        <h5>Escolha a Cobertura:</h5>
        <select 
          className="form-select" 
          value={cobertura} 
          onChange={(e) => setCobertura(e.target.value)}
        >
          <option value="">Selecione a cobertura</option>
          {coberturas.map((c, index) => (
            <option key={index} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Botão de Finalizar Pedido */}
      <button 
        className="btn btn-warning w-100" 
        onClick={finalizarPedido}
        disabled={!massa || !recheio || !cobertura}
      >
        Finalizar Pedido
      </button>

      {/* Resumo do Pedido */}
      {pedido && (
        <div className="mt-4 p-3 bg-light border rounded">
          <h4>Resumo do Pedido:</h4>
          <p><strong>Massa:</strong> {pedido.massa}</p>
          <p><strong>Recheio:</strong> {pedido.recheio}</p>
          <p><strong>Cobertura:</strong> {pedido.cobertura}</p>
          <p className="text-success"><strong>Seu pedido foi registrado com sucesso!</strong></p>
        </div>
      )}
    </div>
  );
}

export default Compra;
